// required to initialize 'Express.js' into code
const express = require(`express`);
// routes for api and html
const apiRoutes = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

// creates the app and sets the PORT
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));
app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);

app.listen(PORT, () => console.log(`API server now on PORT ${PORT}`));
