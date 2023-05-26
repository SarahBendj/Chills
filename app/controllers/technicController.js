const { Technic } = require("../models/index");
const ApiError = require("../errorHandler/CoreError");

const technicController = {
  async showAll(request, response , next) {
    try {
      const technics = await Technic.findAll();

      response.json(technics);
    } catch (error) {
      next(new ApiError("no data", 500));
    }
  },
  async oneTechnic(request, response) {
    const id = parseInt(request.params.id, 10);

    const technic = await Technic.findOne(id)

    response.json(technic);
  },

  async createOne(request, response) {
    
}
}
//technicController.createOne()

module.exports = technicController;
