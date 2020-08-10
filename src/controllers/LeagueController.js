'use strict'


class LeagueController {

    constructor(app) {
        this.App = app;
        this.League = app.mongooseSerivce.model('League');
    }

    async getAll() {
        return await this.League.find({});
    }

    async getById(id) {
        return await this.League.findById(id);
    }

    async save(data) {
        if (data.id) {
            return await this.League.findByIdAndUpdate(data.id, {
                $set: {
                    name: data.name,
                    country: data.country,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    status: data.status
                }
            });
        }

        let league = new this.League(data);
        return await league.save();
    }

    async delete(id) {
        return await this.League.findOneAndRemove({ _id: id });
    }
}

module.exports = LeagueController;