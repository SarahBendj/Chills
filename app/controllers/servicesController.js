const { Services } = require("../models/index");
const ApiError = require("../errorHandler/CoreError");
const fs = require('fs');

const goodsController = {
  async showAll(request, response) {
    try {
      const goods = await Services.findAll();
      //console.log(goods)
      const images = [];
  
      goods.forEach((elem) => {
        console.log(elem.img)
        const imageBuffer = Buffer.from(elem.img);
        const base64Image = imageBuffer.toString('base64');
        images.push(base64Image);
      });
      console.log(images)
  
      response.json(images);
    } catch (error) {
      response.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async showImages(request, response) {
    
      const goods = await Services.findAll();
     response.json(goods)
  },
  async createOne(request, response, next) {
    const { img }= request.body
   
    // Lire le contenu binaire de l'image depuis le système de fichiers
   /* const imageData = fs.readFileSync(`${img}`);
   

  // Encoder l'image en Base64
  let base64Data = imageData.toString('base64');
  //base64Data = encodeURIComponent(base64Data);*/
   const newGoods =  await Services.post(img);
   console.log(newGoods)
   
  if(newGoods){
    response.json(newGoods);
  }else {
    next(new ApiError("no data", 500));
  }
    
  },
};
module.exports = goodsController;
