const express = require("express");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  let queryText = "";

  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      queryText = `UPDATE photos SET likes=likes+1  WHERE id=$1`;
    }
  }

  pool
    .query(queryText, [galleryId])
    .then(result => {
      console.log("Successful PUT server side");
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("Error in server side PUT", error);
      res.sendStatus(500);
    });
});
// END PUT Route

// GET Route
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM photos ORDER BY id`;
  pool
    .query(queryText)
    .then(result => {
      console.log("GOT SOME RESULTS FOR YOU", result);
      res.send(result.rows);
    })
    .catch(error => {
      console.log(`error making connection with database with`, error);
    });
  // res.send(galleryItems);
}); // END GET Route

module.exports = router;
