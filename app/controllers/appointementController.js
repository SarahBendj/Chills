const { Appointement } = require("../models/index");
const ApiError = require("../errorHandler/CoreError");


const AppointementController = {
  async showAll(request, response) {
    try{
      const Appointements = await Appointement.findAll();
      response.json(Appointements);

    }catch(error){
    next(new ApiError("no data", 500));
}
  },
  async showAllInformations(request, response) {
    const id = parseInt(request.params.id,10)
    const Appointements = await Appointement.findOne(id);

    response.json(Appointements);
  },

  async createOne(request, response) {

    await Appointement.insertNew(request.body);
    const AllReceptionControls = await Appointement.findAll();
    
        response.json(AllReceptionControls);
      }
    }


module.exports = AppointementController;
