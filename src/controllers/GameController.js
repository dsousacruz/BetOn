'use strict'

class GameController {

    constructor(app) {
        this.App = app;
        this.Game = app.mongooseSerivce.model('Game');
    }

    async getAll() {
        return await this.Game
            .find({})
            .populate({ path: 'round', populate: { path: 'league' } })
            .populate('group')
            .populate('teams.team', 'name');
    }

    async getById(id) {
        return await this.Game
            .findById(id)
            .populate({ path: 'round', populate: { path: 'league' }})
            .populate('group')
            .populate('teams.team', 'name');
    }

    async save(data) {
        if (data.id) {
            return await this.Game.findByIdAndUpdate(data.id, {
                $set: {
                    round: data.round,
                    group: data.group,
                    date: data.date,
                    status: data.status,
                    teams: data.teams
                }
            });
        }

        let game = new this.Game(data);
        return await game.save();
    }

    async delete(id) {
        return await this.Game.findOneAndRemove({ _id: id });
    }
}

module.exports = GameController;