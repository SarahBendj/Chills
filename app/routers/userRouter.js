const express = require('express');
const router = express.Router();
const signController = require('../controllers/authentification/signController');
const loginController = require('../controllers/authentification/loginController');
const deleteOrModifyProfileController = require('../controllers/authentification/deleteOrModifyProfileController');
const updatePasswordController = require('../controllers/authentification/updatePasswordController');
const forgottenPassword = require('../controllers/authentification/forgottenPassword');
//AUTEHNTIFICATION 
const authentificate = require('../services/middleware/AuthentifByToken')
//validation dataMethod
const validate = require("../services/validate/method");
const schema = require("../services/validate/schemas");

const isAdmin= require("../services/middleware/isAdmin");

//*Admins
/*
//router.get('/users/info',authentificate ,isAdmin,/*superadmin*
//router.get('/users',authentificate,isAdmin,appUserController.showAll)
//*/
router.get('/users', deleteOrModifyProfileController.showAll)


//*Members
router.post('/users/sign', signController.createOne);

router.post('/users/login',validate.method('body',schema.Login), loginController.checkMemberData);

router.post('/login/reset', forgottenPassword.resetPassword);

router.patch('/users/:id', authentificate,validate.method('body',schema.changePassword),updatePasswordController.changingPassword);

router.delete('/users/delete/:id',authentificate, deleteOrModifyProfileController.deleteUser);


module.exports = router;
