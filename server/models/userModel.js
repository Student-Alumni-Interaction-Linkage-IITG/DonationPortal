const mongoose= require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    rollno: {
        type: Number
    },
    phone: {
        type: Number
    },
    profilepic: {
        type: String
    },
    batch: {
        type: Number
    },
    dept: {
        type: String
    },
    address: {
        type: String
    },
    amountInvested: {
        type: Number,
        default: 0
    },
    bookmarkedProjects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project',
        default: ['6431268e70094dfccb04bf27', '64312714c119e199e83a1fe3', '6431276053876c2ca2d137dc']
    },
    investedProjects: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Project',
        default: ['6431268e70094dfccb04bf27', '64312714c119e199e83a1fe3', '6431276053876c2ca2d137dc']
    }
})

//static signup method
userSchema.statics.signup = async function(name,email,password,designation){

    //validation
    if(!email || !password || !name){
        throw Error('All field must be filled')
    }
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash, designation})

    return user;
}

//static login method
userSchema.statics.login = async function(email, password) {
    if(!email || !password){
        throw Error('All field must be filled')
    }

    const user = await this.findOne({ email })

    if(!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
    
}

module.exports = mongoose.model('User', userSchema)