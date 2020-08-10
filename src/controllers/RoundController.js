'use strict'

class RoundController {

    constructor(app) {
        this.App = app;
        this.Round = app.mongooseSerivce.model('Round');
    }

    async getAll() {
        return await this.Round
            .find({}, 'name league games')
            .populate('league', 'name')
            .populate({ path: 'games', populate: { path: 'teams.team' } });
    }

    async getById(id) {
        return await this.Round
            .findById(id, 'name league')
            .populate('league', 'name');
    }

    async save(data) {
        if (data.id) {
            return await this.Round.findByIdAndUpdate(data.id, {
                $set: {
                    name: data.name,
                    league: data.league
                }
            });
        }

        let round = new this.Round(data);
        return await round.save();
    }

    async delete(id) {
        return await this.Round.findOneAndRemove({ _id: id });
    }
}

module.exports = RoundController;