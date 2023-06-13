const { BodyZone } = require('../models/index')
const ApiError = require("../errorHandler/CoreError");

const bodyZoneController = {
    
    async showAll(request ,response, next ){
        try{
            const bodyZones = await BodyZone.findAll()
            response.json(bodyZones)

        }catch(error){
            next(new ApiError("no data", 500));
        }
        
    },
    async createOne(request, response) {
        const newBodyZone = await BodyZone.insertNew(request.body);
        if(newBodyZone){
            response.json(newBodyZone);
         }else {
            next(new ApiError("no data", 500));
          }
       
      },


}
module.exports = bodyZoneController;