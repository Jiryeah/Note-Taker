const fs = require(`fs`);
const path = require(`path`);

function newNote (body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, `../db/db.json`),
    JSON.stringify({notesArray}, null, 2)
  );
  return note;
}

// function for delete functionality can be place here

module.exports = {
  newNote
};
