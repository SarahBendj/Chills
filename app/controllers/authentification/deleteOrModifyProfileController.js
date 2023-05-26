const { AppUser } = require("../../models/index");
const ApiError = require("../../errorHandler/CoreError");
const { sendWelcomeEmail } = require("../../services/emailing/emailService");
const bcrypt = require('bcrypt');

const deleteOrModifyProfileController = {
  async showAll(request, response) {
    const users = await AppUser.showUsers();
    if (users) {
      response.json(users);
    } else {
      next(new ApiError("no data", 500));
    }
  },
  async showAllInfo(request, response) {
    const users = await AppUser.findAll();
    if (users) {
      response.json(users);
    } else {
      next(new ApiError("no data", 500));
    }
  },

  
  
  async deleteUser(request, response, next) {
    const id = parseInt(request.params.id, 10);
    await AppUser.delete(id);
    const user = await AppUser.findOne(id);
    if (!user) {
      next(new ApiError("successfully deleted", 200));
    } else {
      next(new ApiError("no data", 500));
    }
  }

}

module.exports = deleteOrModifyProfileController;
