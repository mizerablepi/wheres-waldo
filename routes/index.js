const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controller");
const path = require("path");

/* GET home page. */
router.get("/", (req, res) => {
  res.sendFile(
    path.join(
      "/mnt/f6949ea6-23f5-4c75-bca3-14668f4f4d8f/zed/js/TOP/wheres-waldo/server/",
      "build",
      "dist",
      "index.html"
    )
  );
});
router.get("/play/:map", controller.getCharacterList);
router.post("/play/:map/check", controller.checkCoords);
router.get("/leaderboard", controller.getLeaderboard);
router.get("/startTime", controller.startTime);
router.post("/submit/:map", controller.addScore);

module.exports = router;
