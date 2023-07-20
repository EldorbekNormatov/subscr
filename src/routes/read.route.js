const router = require("express").Router()
const {read } = require("../controller/read.controller")
const {isAuth} = require("../middlewares/isAuth")


router.get("/read", isAuth, read)

module.exports = router