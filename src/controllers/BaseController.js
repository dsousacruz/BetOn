'use strict'

const APP = require('../app');

class BaseController {

    constructor(){
        this.App = new APP();
    }

}

module.exports = BaseController;