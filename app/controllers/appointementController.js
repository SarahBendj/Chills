const { Appointement, Services, Discount } = require("../models/index");
const ApiError = require("../errorHandler/CoreError");

const AppointementController = {
  async showAll(request, response) {
    try {
      const Appointements = await Appointement.findAll();
      response.json(Appointements);
    } catch (error) {
      next(new ApiError("no data", 500));
    }
  },

  async createOne(request, response, next) {
    const {
      discount_sale,
      rdv_date,
      createdat,
      description,
      app_user_id,
      body_zone_id,
      services_id,
      extra_id,
      technic_id,
    } = request.body;
    //SOME CONDITIONS TO FIX THE FINAL PRICE
    //*  Obligation number ONE pick a service
    // if (!services_id) {
    // response.status(400).json({ error: "the service is required" });

    try {
      const appointementBooked = await Appointement.insertNew(request.body);
      const discounted = await Discount.findAll();
      let totalPrice = 0;
      //*CONDITION ON PRICE IF EXTRA SERVICE IS TAKEN
      if (extra_id) {
        //PRICE WOULD RISE
        currentService = await Services.findOne(services_id);
        const extraPrice = 0.1 * currentService.price;
        totalPrice = extraPrice + currentService.price;
      } else {
        return (totalPrice = currentService.price);
      }

      //*CONDITION ON  PRICE IS THERE A DISCOUNT
      const match = discounted.find((i) => i.name === discount_sale);
  
      if (discount_sale && match) {
        totalPrice = totalPrice - (match.sale * totalPrice) / 100;
      } 
      //* SEND THE BOOKING INFO FILE + SPECIFIC PRICE
      response.json({ appointementBooked, totalPrice });
    } catch (error) {
      response.json(error.message);
    }
  },
  async showOne(request, response, next) {
    const id = parseInt(request.params.id, 10);
    try {
      const appointement = await Appointement.findOne(id);
      console.log(appointement);
      response.json(appointement);
    } catch (error) {
      response?.json(error.message);
    }
  },
};

module.exports = AppointementController;
