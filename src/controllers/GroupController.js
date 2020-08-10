'use strict'

class GroupController {

    constructor(app) {
        this.App = app;
        this.Group = app.mongooseSerivce.model('Group');
    }

    async getAll() {
        return await this.Group
            .find({}, 'name league')
            .populate('league', 'name');
    }

    async getById(id) {
        return await this.Group
            .findById(id, 'name league')
            .populate('league', 'name');
    }

    async save(data) {
        if (data.id) {
            return await this.Group.findByIdAndUpdate(data.id, {
                $set: {
                    name: data.name,
                    league: data.league
                }
            });
        }

        let group = new this.Group(data);
        return await group.save();
    }

    async delete(id) {
        return await this.Group.findOneAndRemove({ _id: id });
    }
}

module.exports = GroupController;