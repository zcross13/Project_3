const {Schema, model} = require('mongoose')


const profileSchema = new Schema({
    firstName: { type: String, require: true }, 
    lastName: { type: String, require: true }, 
    email: { type: String, require: true },
    dob: Date, 
    reservationHistory: 
        {
            type: mongoose.Schema.Types.ObjectId,           
            ref:'Reservation'
        }, 
    location: { type: String, require: true },
    age: { type: String, require: true },  
    driverLicense: { type: String, require: true }
})


const Profile = model('Profile', profileSchema)

module.exports= Profile