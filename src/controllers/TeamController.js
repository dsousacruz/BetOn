'use strict'

class TeamController {

    constructor(app) {
        this.App = app;
        this.Team = app.mongooseSerivce.model('Team');
    }

    async getAll() {
        return await this.Team.find({});
    }

    async getById(id) {
        return await this.Team.findById(id);
    }

    async save(data) {
        if (data.id) {
            return await this.Team.findByIdAndUpdate(data.id, {
                $set: {
                    name: data.name,
                    nickName : data.nickName,
                    initials: data.initials
                }
            });
        }

        let team = new this.Team(data);
        return await team.save();
    }

    async delete(id) {
        return await this.Team.findOneAndRemove({ _id: id });
    }
}

module.exports = TeamController;