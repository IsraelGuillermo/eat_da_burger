// requires express
const express = require("express");
// requires the file from models burger.js
const burger = require("../models/burger.js");
const router = express.Router();

// This is the main/home path thiwh displays everything from the database
router.get("/", (req, res) => {
  burger.selectAll(function (data) {
    var hbsObject = {
      burger_name: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// this route allows user to add/post a new burger
router.post("/api/burgers", (req, res) => {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

// This allows the user to update from burgers to devour to devoured burgers. it is the update part of CRUD
router.put("/api/burger/:id", (req, res) => {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne(
    {
      devoured: true,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(400).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;
