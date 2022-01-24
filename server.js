// required to initialize 'Express.js' into code
const express = require(`express`);

// creates the server and sets the PORT
const app = express();
const PORT = process.env.PORT || 3001;

// routes for api and html
const htmlRoutes = require(`./Routes/htmlRoutes`);
const apiRoutes = require(`./Routes/apiRoutes`);

// can use this for deleted feature
app.use(express.urlencoded({ extended: true }));
// middleware
app.use(express.json());
app.use(express.static(`public`));

app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);



app.listen(PORT, () => {
  console.log(`API server now on PORT ${PORT}`);
});