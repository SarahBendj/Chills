const express = require('express');
const router = express.Router();
/*connection all the controls to the router */
const appointementController = require('../controllers/appointementController');
const technicController = require("../controllers/technicController")
const authentificate = require('../services/middleware/AuthentifByToken')
//validation dataMethod
const validate = require("../services/validate/method");

//*appointementS
router.get('/technics', technicController.showAll)
router.get('/appointements', appointementController.showAll);
router.post('/appointements',appointementController.createOne);
// router.get('/appointements/info',authentificate,appointementController.showAllInformations)
router.get('/appointements/:id', appointementController.showOne)



module.exports = router;

