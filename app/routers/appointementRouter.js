const express = require('express');
const router = express.Router();
/*connection all the controls to the router */
const appointementController = require('../controllers/appointementController');
const technicController = require("../controllers/technicController")
const authentificate = require('../services/middleware/AuthentifByToken')
//validation dataMethod
const validate = require("../services/validate/method");
const schema = require("../services/validate/schemas");

//*appointementS
router.get('/technics', technicController.showAll)
router.get('/appointements', appointementController.showAll);
router.post('/appointements',appointementController.createOne);
router.get('/appointements/info',authentificate,appointementController.showAllInformations)

//*FRIDGECONTROLS
/*
router.get('/fridgecontrols',authentificate, fridgeControlController.showAll);
router.get('/fridgecontrols/:id',authentificate, fridgeControlController.oneTemperatureOfOneFridge)//ça onefridgecontrols/:id
router.get('/fridgecontrols/:id/list',authentificate,fridgeControlController.AllTemperaturesOfOneFridge)// ça allcontrols/:id
router.post('/fridgecontrols',authentificate, fridgeControlController.createOne);*/


module.exports = router;

