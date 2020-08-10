'use strict'

class BetRoomController {

    constructor(app) {
        this.App = app;
        this.BetRoom = app.mongooseSerivce.model('BetRoom');
        this.mongoose = app.mongooseSerivce.mongoose;
    }

    async getAll() {
        return await this.BetRoom
            .find({})
            .populate("user", "name")
            .populate("league", "name");
    }

    async getById(id) {
        return await this.BetRoom
            .findById(id)
            .populate("user", "name")
            .populate("league", "name");
    }

    async save(data) {
        if (data.id) {
            return await this.BetRoom.findByIdAndUpdate(data.id, {
                $set: {
                    name: data.name,
                    league: data.league,
                    status: data.status
                }
            });
        }

        let betRoom = new this.BetRoom(data);
        return await betRoom.save();
    }

    async delete(id) {
        return await this.BetRoom.findOneAndRemove({ _id: id });
    }
}

module.exports = BetRoomController;