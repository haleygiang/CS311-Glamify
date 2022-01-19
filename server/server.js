const express = require("express");
const app = express();
const mysql = require('mysql');
const cors  = require('cors'); //Server connection stuff
const path = require('path');

app.use(cors()); //Server connection stuff
app.use(express.json()); //Specifys json format for express.

//Router Setup
const productRouter = require("./routes/product.routes.js")(app);
const reviewRouter = require("./routes/review.routes.js")(app);
const userRouter = require("./routes/user.routes.js")(app);

//app.use('/products', productRouter);
//app.use('/reviews', reviewRouter);
//app.use('/users', userRouter);

// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Running on port ${PORT}.');
})

//Declares Static files for node
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Runs React app?
if(process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, 'client/build')));  
    
    app.get('*', (req, res) => {    
        res.sendFile(path.join(__dirname = 'client/build/index.html'));  
    })
}

app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
