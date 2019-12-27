var express = require('express');
var router = express.Router();
const userController = require("../controllers/users")
/* GET users listing. */
router.get("/:id", userController.findOne)
router.get('/', userController.fetchAll);
router.post("/", userController.insertOne)
router.put("/:id", userController.update)
router.delete("/:id", userController.delete)

module.exports = router;