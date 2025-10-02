const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // try to get the token from the request {at 1st index}
    if(!token) return res.status(401).json({message : "Token not found."});

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; // assign to user
        next(); // move to next route or middleware
    }
    catch(err) {
        res.status(403).json({message: "Invalid token"});
        console.log(err);
    }
}

module.exports = verifyToken;