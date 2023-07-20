const router = require("express").Router()
const {fillBalance, } = require("../controller/fillBalance.controller")
const {isAuth} = require("../middlewares/isAuth")


router.put("/fillBalance", isAuth,  fillBalance)

module.exports = router