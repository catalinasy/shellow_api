const router = require('express').Router();
const businessController = require('../controllers/businessController');

router.get("/",  (req, res) => businessController.getBusinesses(req, res));
router.post("/", (req, res) => businessController.createBusiness(req, res));

module.exports = router