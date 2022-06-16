const router = require("express").Router();
const controller = require("../controller/controllerPerson");

router.post("/", controller.personPost);

router.get("/", controller.getPersonById);

router.get("/:id", controller.getPerson);

router.patch("/:id", controller.patchPerson);

router.delete("/:id", controller.deletePerson);

module.exports = router;
