const router = require('express').Router();
const businessController = require('../controllers/businessController');

router.get("/",  (req, res) => businessController.getBusinesses(req, res));
router.get("/:id", (req, res) => businessController.getBusinessesById(req, res));
// router.get("?:queryParam", (req, res) => businessController.findByTag(req, res)

router.post("/", (req, res) => businessController.createBusiness(req, res));

module.exports = router