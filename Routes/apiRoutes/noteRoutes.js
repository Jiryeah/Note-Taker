const router = require(`express`).Router;
// create const path to memory.js housing new note.
const { newNote } = require(`../../lib/memory`);
// create const path to array from notes information
const { notesArray } = require(`../../db/db.json`);

router.get(`/notes`, (req,res) => {
  const result = notesArray;
  if (result) {
    res.json(result)
  } else {
    res.send(404)
  }
});

router.post(`/notes`, (req, res) => {
  req.body.id = notesArray.length.toString();

  if (notesArray) {

  }
  
})

// for delete functionality
// router.delete(`/notes/id:`, (req, res) => {
//   const result = notes 
// });


module.exports = router;