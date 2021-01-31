const express = require('express')
const morgan = require('morgan')
const port = 3000;
const models = require("./models")
const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')


var app = express();


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(morgan('tiny'))

app.use("/products",routes);






db.sync({force:true})
.then(() => {
  app.listen(port, () => {
    console.log(`linsten on port ${port}`);
  });
});



