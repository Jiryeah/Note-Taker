// required to initialize 'Express.js' into code
const express = require(`express`);

// creates the server and sets the PORT
const PORT = process.env.PORT || 3001;
const app = express();
// routes for api and html
const apiRoutes = require(`./Routes/apiRoutes`);
const htmlRoutes = require(`./Routes/htmlRoutes`);


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