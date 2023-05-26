const ApiError = require("../../errorHandler/CoreError");
const jwt_decode = require('jwt-decode')


const isAdmin = (request, response, next) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const decoded_token = jwt_decode(token)
  
    // On a enchainé les middlewares, si on est la on a un user
    if ( decoded_token.role == 'admin') {
        request.user.role = 'admin'
        next();    
    } else {
        return next(new ApiError("Unauthorized", 401));
    }

};

module.exports = isAdmin;