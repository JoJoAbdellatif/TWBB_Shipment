const express = require('express');
require("dotenv").config()
const asyncHandler = require('express-async-handler')
const Shipping = require('../models/shipping')
const shippingRoute = express.Router();
const URL = 'http://localhost:7000/shipment/';
const axios = require('axios');
const shipment = require('../models/shipping');


//Create Shipment
shippingRoute.post('/createShippment/:id',asyncHandler(async(req,res) =>{

    const ShipmentExists = await Shipping.findOne({OrderId: req.params.id})

    if(ShipmentExists){
        res.status(505);
        res.send("The Shippment Already Exists");
       // throw new Error("This Shipment Already Exists");
    }
    else{
        const createShippment = await Shipping.create({Status: "Created",OrderId: req.params.id, Destination: "Delivered" })
    
        res.status(200);
        res.send("Shipment Created");
    }
    
}))
shippingRoute.patch('/updateStatus/:id',asyncHandler(async(req,res)=>{
    const ShipmentExists = await Shipping.findOne({_id: req.params.id})
    const updates = req.body;

    if(!ShipmentExists){
        res.send("The Shippment Does Not Exists");

    }
    else{
        shipment.updateOne({_id: req.params.id},{$set:updates})
        .then(result => {
            res.status(200).json(result)
            
        })
        .catch(err => {
            res.status(500).json({error:'Could not update the document'})
        })
    }
    
}))


module.exports = shippingRoute;