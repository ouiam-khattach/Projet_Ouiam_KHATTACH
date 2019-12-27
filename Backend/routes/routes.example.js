var express = require('express');
var router = express.Router();
const exampleController = require("../controllers/examples")
/* GET examples listing. */
router.get('/', exampleController.fetchAll);
router.get("/:id", exampleController.findOne)
router.post("/", exampleController.insertOne)
router.put("/:id", exampleController.update)
router.delete("/:id", exampleController.delete)

module.exports = router;