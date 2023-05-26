const { Header } = require("../models/index");
const ApiError = require("../errorHandler/CoreError");


const headerController = {
  async showAll(request, response , next) {
    try{
      const Headers = await Header.findAll();
      response.json(Headers);

    }catch(error){
    next(new ApiError("no data", 500));
}}}

module.exports = headerController;