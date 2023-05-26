require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;
const error = require('./app/errorHandler/errorCases')

app.use(cors());

//routers bloc
const routeBase = './app/routers'
const commonRouter = require(`${routeBase}/commonRouter`)
const appointementRouter = require(`${routeBase}/appointementRouter`) 
const userRouter = require(`${routeBase}/userRouter`)



app.use(express.json())
// linking routers with index endPoint
app.use(commonRouter,appointementRouter ,userRouter )

// Handling error cases

app.use(error.manage)
app.use(error._404)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});