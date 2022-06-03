const mongoose = require('mongoose')
//conect Database:
const dbconnect=()=>{mongoose.connect(process.env.Shipment_DB,{

    useUnifiedTopology:true,

    useNewUrlParser:true,
}).then(()=>console.log('DB Connected')).catch(err=>console.log(err))};

module.exports = dbconnect;