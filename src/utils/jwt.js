const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY

const sign = (payload) => jwt.sign(payload, SECRET_KEY);
const verify = (toket) => jwt.verify(toket, SECRET_KEY );

module.exports = {
    sign,
    verify,
}