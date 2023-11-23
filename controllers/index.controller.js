const asyncHandler = require("express-async-handler");
const Map = require("../models/Map");
const Scores = require("../models/Scores");
// const { body, validationResult } = require("express-validator");
// const Account = require("../models/Account");

exports.getCharacterList = asyncHandler(async (req, res) => {
  const map = await Map.findOne({ name: req.params.map })
    .populate("characters")
    .exec();
  const result = map.characters.map((character) => character.name);
  req.session.remainingCharacters = result;
  res.json(result);
});

exports.getLeaderboard = asyncHandler(async (req, res) => {
  const scores = await Scores.find().sort({ time: 1 }).limit(5).exec();
  console.log(req.session.id);
  console.log(req.session.user);
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
  let result = false;

  if (
    req.body.coords.x + 0.05 > chosenCharacter.minX &&
    req.body.coords.x - 0.05 < chosenCharacter.maxX &&
    req.body.coords.y + 0.05 > chosenCharacter.minY &&
    req.body.coords.y - 0.05 < chosenCharacter.maxY
  ) {
    result = true;
    const index = req.session.remainingCharacters.indexOf(
      req.body.characterName
    );
    if (index == -1) {
      res.json({ message: "already found" });
      res.end();
    }

    req.session.remainingCharacters.splice(index, 1);
    if (req.session.remainingCharacters.length === 0) {
      const timeTaken = Date.now() - req.session.startTime;
      req.session.timeTaken = timeTaken;

      res.json({ result: "fin", time: timeTaken });
    } else {
      res.json({ result });
    }
  } else {
    res.json({ result });
  }
});

exports.startTime = (req, res) => {
  req.session.startTime = Date.now();
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

  if (!mapNames.includes(req.params.map) || req.body.username.length > 20) {
    res.status = 400;
    res.send("error");
    res.end();
  } else {
    await score.save();
    res.redirect("/");
  }
});

// exports.signup = [
//   body("username", "Enter a proper username")
//     .trim()
//     .isLength({ min: 1 })
//     .escape(),
//   body("password", "Enter a proper password")
//     .trim()
//     .isLength({ min: 1 })
//     .escape(),
//   body("password-confirm", "Enter a proper password")
//     .trim()
//     .isLength({ min: 1 })
//     .escape(),
//   asyncHandler(async (req, res) => {
//     if (!validationResult(req).isEmpty()) {
//       res.send("ERROR");
//       res.end();
//     }
//     if (req.body.password != req.body["password-confirm"]) {
//       res.send("password dont match");
//       res.end();
//     }
//     const account = new Account({
//       username: req.body.username,
//       password: req.body.password,
//     });
//     await account.save();
//     res.redirect("/");
//   }),
// ];

// exports.login = [
//   body("username", "Enter a proper username")
//     .trim()
//     .isLength({ min: 1 })
//     .escape(),
//   body("password", "Enter a proper password")
//     .trim()
//     .isLength({ min: 1 })
//     .escape(),
//   asyncHandler(async (req, res) => {
//     const account = await Account.findOne({
//       username: req.body.username,
//     }).exec();
//     if (!validationResult(req).isEmpty() || account == null) {
//       res.send("ERROR");
//       res.end();
//     } else {
//       req.session.user = account.username;
//       res.redirect("http://localhost:5173");
//     }
//   }),
// ];
