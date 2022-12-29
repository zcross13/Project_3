const {Schema, model } = require('mongoose')

const reservationSchema = new Schema({
    telsa: 
        {
            type: Schema.Types.ObjectId,           
            ref:'Telsa', 
            required: true
        }, 
    pickupDate: 
        {
            type: Date,
            required: true
        } ,
    returnDate: 
        {
            type: Date,
            required: true
        }, 
    profile: 
        {
            type: Schema.Types.ObjectId, 
            ref:'Profile'
        }
})


const Reservation = model('Reservation', reservationSchema)

module.exports= Reservation


