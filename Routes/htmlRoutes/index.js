const path = require(`path`);
const router = require(`express`).Router();

// route to notes.html
router.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../../public/notes.html`));
});

// wildcard route to index.html
router.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../../public/index.html`));
});

module.exports = router;