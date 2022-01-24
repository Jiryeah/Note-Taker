// required to initialize 'Express.js' into code
const express = require(`express`);
const fs = require(`fs`);

// required to initialize port
const PORT = process.env.PORT || 3001;
const app = express();

// routes for api and html
const htmlRoutes = require(`./Routes/htmlRoutes`);
const apiRoutes = require(`./Routes/apiRoutes`);

// middleware
app.use(express.json());
app.use(express.static(`public`));

app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);



app.listen(PORT, () => {
  console.log(`API server now on PORT ${PORT}`);
});