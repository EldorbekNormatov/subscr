const auth = require("./auth.route")
const chanel = require("./chanel.route")
const subscribe = require("./subscr.route")
const fillBalance = require("./fillBalance.route")
const read = require("./read.route")

module.exports = [auth, chanel,subscribe, fillBalance, read ]