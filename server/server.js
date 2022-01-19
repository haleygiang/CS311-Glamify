const express = require("express");
const app = express();
const mysql = require('mysql');
const cors  = require('cors'); //Server connection stuff
//const path = require('path');

app.use(cors()); //Server connection stuff
app.use(express.json()); //Specifys json format for express.

//Router Setup
const productRouter = require("./routes/product.routes.js")(app);
const reviewRouter = require("./routes/review.routes.js")(app);
const userRouter = require("./routes/user.routes.js")(app);

//app.use('/products', productRouter);
//app.use('/reviews', reviewRouter);
//app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.json({message: "Come in through the front please. https://cs311-glamify-client.herokuapp.com"});
});

// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Running on port ${PORT}.');
})