const jwt = require("../utils/jwt");

const isAuth = (req, res, next) => {
    try {
        const {token}  = req.cookies
        

        if(!token) return res.status(401).json({message: "Invalid token"});

        const user = jwt.verify(token);

        req.user = user;
        next();
    } catch (error) {
        res.status(403).json({message: "Invalid token"});
    }
};


module.exports = {
    isAuth
}