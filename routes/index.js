const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controller");

/* GET home page. */
router.get("/play/:map", controller.getCharacterList);
router.post("/play/:map/check", controller.checkCoords);
router.get("/leaderboard", controller.getLeaderboard);
router.get("/startTime", controller.startTime);
router.post("/submit/:map", controller.addScore);

module.exports = router;
