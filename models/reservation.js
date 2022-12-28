const {Schema, model } = require('mongoose')

const reservationSchema = new Schema({
    telsa: 
        {
            type: mongoose.Schema.Types.ObjectId,           
            ref:'Telsa', 
            required: true
        }, 
    pickupLocation: 
        {
            type: Date,
            required: true
        } ,
    dropoffLocation: 
        {
            type: Date,
            required: true
        }, 
    profile: 
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:'Profile'
        }
})


const Reservation = model('Reservation', reservationSchema)

module.exports= Reservation


