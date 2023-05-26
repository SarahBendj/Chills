require("dotenv").config();
const ApiError = require("../../errorHandler/CoreError");
const jwt = require("jsonwebtoken");

function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // => autorization kjfhdfksjklqjx,kcfhixhcdqklclxgfcwsh 
  // => on va spliter les poles , puis les ranger dans un tableau , 
  // => le [1] permet de récuperer le token seulement: kjfhdfksjklqjx,kcfhixhcdqklclxgfcwsh 
  if (!token) {
    //return  response.status(401).json({error: "Unauthorized"});
   return next(new ApiError("Unauthorized", 401));

  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      if (error.name === "TokenExpiredError") {
        return next(new ApiError("Token expired", 401));
      } else {
        return next(new ApiError("Forbidden", 403));
      }
    }
    request.user = user;
    next();
  });
}

module.exports = authenticateToken;
