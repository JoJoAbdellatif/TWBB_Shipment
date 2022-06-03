const mongoose  =require('mongoose');
mongoose.pluralize(null);

const ShipmentSchema = new mongoose.Schema({
    
    Status:{
            type: String,
            default:'Created',
            required: true
        },
    OrderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'order',
        required: true
    },
    Destination:{
        type:String,
        default:'Delivered',
        required: true
    }


}
)
const shipment = mongoose.model('Shipment',ShipmentSchema);

module.exports = shipment;