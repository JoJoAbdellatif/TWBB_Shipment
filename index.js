const express= require('express');
const mongoose = require('mongoose');
const dotenv= require("dotenv");
const shippingRoutes = require('./routes/shippingRoutes');
const cors = require('cors')
const app = express();
dotenv.config();
require('./config/dbconnect')();


app.use(cors({origin: true, credentials: true}));
app.use(express.json());

 app.use('/api/shipping',shippingRoutes)

const PORT = process.env.PORT||7000;

app.listen(PORT,(req , res)=>{
    console.log(`Server is Up and Running ${PORT}`);
});