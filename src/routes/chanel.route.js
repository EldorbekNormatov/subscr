const router = require("express").Router()
const {createChanel, } = require("../controller/chanel.controller")
const {isAuth} = require("../middlewares/isAuth")


router.post("/chanel/create", isAuth, createChanel)

module.exports = router