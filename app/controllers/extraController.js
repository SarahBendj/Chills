const { Extra } = require('../models/index')
const ApiError = require("../errorHandler/CoreError");

const extraController = {
    
    async showAll(request ,response, next ){
        try{
            const extras = await Extra.findAll()
            response.json(extras)

        }catch(error){
            next(new ApiError("no data", 500));
        }
        
    },
    async createOne(request, response) {
        const newExtra = await extra.insertNew(request.body);
        if(newExtra){
            response.json(newExtra);
         }else {
            next(new ApiError("no data", 500));
          }
       
      },


}
module.exports = extraController