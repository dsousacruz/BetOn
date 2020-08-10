'use strict'

class UserController {

    constructor(app) {
        this.App = app;
        this.User = app.mongooseSerivce.model('User');
        this.mongoose = app.mongooseSerivce.mongoose;
    }

    async getAll() {
        return await this.User.find({});
    }

    async getById(id) {
        return await this.User.findById(id);
    }

    async save(data) {
        if (data.id) {
            return await this.User.findByIdAndUpdate(data.id, {
                $set: {
                    name: data.name,
                    email: data.email,
                    status: data.status,
                    role: data.roles
                }
            });
        }

        let user = new this.User(data);
        return await user.save();
    }

    async delete(id) {
        return await this.User.findOneAndRemove({ _id: id });
    }

    async authenticate(data) {
        return await this.User.findOne({
            email: data.email,
            password: data.password
        });
    }
}

module.exports = UserController;