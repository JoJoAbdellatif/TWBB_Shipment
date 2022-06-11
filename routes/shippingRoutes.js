const express = require('express');
require("dotenv").config()
const asyncHandler = require('express-async-handler')
const Shipping = require('../models/shipping')
const shippingRoute = express.Router();
const shipment = require('../models/shipping');


//Create Shipment
shippingRoute.post('/createShippment/:id',asyncHandler(async(req,res) =>{

    const ShipmentExists = await Shipping.findOne({OrderId: req.params.id})

    if(ShipmentExists){
        res.status(505);
        res.send("The Shippment Already Exists");
    }
    else{
        const createShippment = await Shipping.create({Status: "Created",OrderId: req.params.id, Destination: "Delivered" })
    
        res.status(200);
        res.send("Shipment Created");
    }
    
}))

shippingRoute.get('/:id',asyncHandler(async(req,res) =>{
    const ShipmentExists = await Shipping.findOne({OrderId: req.params.id})

    // if(!ShipmentExists){
    //     res.status(505);
    //     res.send("The Shippment Doesn't Exists");
       
    // }
    // else{
    //     res.send(ShipmentExists)
    // }
    res.send(ShipmentExists)
}))


shippingRoute.patch('/updateStatus/:id',asyncHandler(async(req,res)=>{
    const ShipmentExists = await Shipping.findOne({OrderId: req.params.id})
    const updates = req.body;

    if(!ShipmentExists){
        res.send("The Shippment Does Not Exists");

    }
    else{
        shipment.updateOne({OrderId: req.params.id},{$set:updates})
        .then(result => {
            res.status(200).json(result)
            
        })
        .catch(err => {
            res.status(500).json({error:'Could not update the document'})
        })
    }
    
}))


module.exports = shippingRoute;