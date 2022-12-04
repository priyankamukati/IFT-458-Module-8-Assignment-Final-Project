/********************************************************************************************************************
Author: Priyanka Mukati
Date: 12/03/2022
Source code description: start the application server(http://localhost:3000/) and establishes connection with MongoDB
My application name is PayEasy Loans
***********************************************************************************************************************/
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');


const app = require('./app');
const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.set('useCreateIndex', true); 
mongoose.connect(MONGO_DATA_BASE,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(con => {
    console.log(`The Database connection was successful with ${process.env.DATABASE}`);
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


