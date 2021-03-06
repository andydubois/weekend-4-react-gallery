const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  let queryText = "";

  queryText = `UPDATE photos SET likes=likes+1 WHERE id=$1`;

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

// DELETE Route
router.delete("/delete/:id", (req, res) => {
    let deleteId = req.params.id;
    console.log('Delete request for id', deleteId);
    let queryText = `DELETE FROM photos WHERE id=$1;`;
    pool.query(queryText, [deleteId])
    .then(result => {
        console.log('Song deleted');
        res.sendStatus(200);
    })
    .catch(error => {
        console.log(`Error deleting song from database query: {queryText}`, error);
        res.sendStatus(500);
    })
})



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

// POST route

router.post("/", (req, res) => {
  const newPhoto = req.body;
  //add new image to SQL database string
  const queryText = `INSERT INTO photos (path, description, title, likes) VALUES ($1, $2, $3, $4)`;
  //communicate with database
  pool
    .query(queryText, [newPhoto.path, "Photo submitted by user! :)", '', '0'])
    .then(result => {
      //log of photo url sent to database on successful POST
      console.log("Added new photo to database", newPhoto);
      //THUMBS UP
      res.sendStatus(201);
    })
    .catch(error => {
      //error message log along with SQL query string sent
      console.log(`Error making query to database ${queryText}`, error);
      //error message
      res.sendStatus(500);
    });
});

// end POST route

module.exports = router;
