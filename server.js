const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const businessRoutes = require("./routers/businessRouters");

app.use(bodyParser.json());

app.use('/api/businesses', businessRoutes)

app.listen(port, () => console.log(`shellow api listening on port ${port}!`));
