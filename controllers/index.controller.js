const asyncHandler = require("express-async-handler");
const Map = require("../models/Map");
const Scores = require("../models/Scores");

exports.getCharacterList = asyncHandler(async (req, res) => {
  const map = await Map.findOne({ name: req.params.map })
    .populate("characters")
    .exec();
  const result = map.characters.map((character) => character.name);
  req.session.remainingCharacters = result;
  res.json(result);
});

exports.getLeaderboard = asyncHandler(async (req, res) => {
  const scores = await Scores.find().sort({ time: 1 }).limit(3).exec();
  console.log(req.session.id);
  res.json(scores);
});

exports.checkCoords = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const map = await Map.findOne({ name: req.params.map })
    .populate("characters")
    .exec();
  const chosenCharacter = map.characters.find(
    (character) => character.name == req.body.characterName
  );
  let result;

  if (
    req.body.coords.x + 0.05 > chosenCharacter.minX &&
    req.body.coords.x - 0.05 < chosenCharacter.maxX &&
    req.body.coords.y + 0.05 > chosenCharacter.minY &&
    req.body.coords.y - 0.05 < chosenCharacter.maxY
  ) {
    result = true;
    console.log(req.session.remainingCharacters);
    req.session.remainingCharacters.splice(
      req.session.remainingCharacters.indexOf(req.body.characterName),
      1
    );
    if (req.session.remainingCharacters.length === 0) {
      const timeTaken = Date.now() - req.session.startTime;
      req.session.timeTaken = timeTaken;

      res.json({ result: "fin", time: timeTaken });
    }
  } else {
    res.json({ result });
  }
});

exports.startTime = (req, res) => {
  req.session.startTime = Date.now();
  console.log("START TIME SET TO >>>>", req.session.startTime);
  res.json({ cookie: req.sessionID });
};

exports.addScore = asyncHandler(async (req, res) => {
  const maps = await Map.find().select("name").exec();
  const mapNames = maps.map((map) => map.name);

  const score = new Scores({
    username: req.body.username,
    time: req.session.timeTaken,
    map: req.params.map,
    date: new Date(),
  });

  if (!mapNames.includes(req.params.map)) {
    res.status = 400;
    res.send("error");
    res.end();
  } else {
    await score.save();
    res.redirect("http://localhost:5173/");
  }
});
