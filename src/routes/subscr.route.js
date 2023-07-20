const router = require("express").Router()
const {subscribe, } = require("../controller/subscr.router")
const {isAuth} = require("../middlewares/isAuth")

router.post("/chanel/subscribe", isAuth, subscribe)

module.exports = router