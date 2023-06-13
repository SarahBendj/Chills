
const { Category } = require("../models/index");

const CategoryController = {
  async showAll(request, response, next) {
    const categories = await Category.findAll();
    if (categories) {
      response.json(categories);
    } else {
      next(new ApiError("no data", 500));
    }
  },
  async showOneCategory(request, response, next) {
    const id = parseInt(request.params.id, 10);
    const category = await Category.findOne(id);
    if (category) {
      response.json(category);
    } else {
      next(new ApiError("no data", 500));
    }
  },
 
  
};

module.exports = CategoryController;
