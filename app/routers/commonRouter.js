const express = require("express");

const servicesController = require("../controllers/servicesController");
const technicController = require("../controllers/technicController")
const extraController = require("../controllers/extraController");
const discountController = require("../controllers/discountController");
const headerController = require("../controllers/headercontroller");
const bodyZoneController = require("../controllers/bodyZoneController");
const CategoryController = require("../controllers/categoryController")

//validation dataMethod
const validate = require("../services/validate/method");
const schema = require("../services/validate/schemas");
const authentificate = require("../services/middleware/AuthentifByToken");
const isAdmin= require("../services/middleware/isAdmin");

const router = express.Router();

//*services
router.get("/services/images", servicesController.showAll);
router.get("/services", servicesController.showImages);
router.get("/services/:id", servicesController.showOneService)
router.post("/services",servicesController.createOne);


//*Category

router.get("/categories", CategoryController.showAll);
router.get("/categories/:id", CategoryController.showOneCategory);
//*BodyZOne

router.get("/bodyzones", bodyZoneController.showAll);

//*discount
router.get("/discounts" , discountController.showAll);

//*header
router.get("/headers" , headerController.showAll);

//*technicS
/*
router.get("/technics", technicController.showAll);
router.get("/technics/infos/:id",authentificate,technicController.showOnetechnic); // technicsinfo
router.post("/technics",isAdmin,validate.method('body',schema.technicOrGoods), technicController.createOne);
router.put("/technics/:id",isAdmin, technicController.updateOne);
router.delete("/technics/:id",isAdmin, fridgeController.deleteOne);*/
//*extraS
router.get("/extras", extraController.showAll);
router.post("/extras", extraController.createOne);

module.exports = router;
