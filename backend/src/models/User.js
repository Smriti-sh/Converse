import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        minlength:6
    },
    bio:{
        type: String,
        default:""
    },
    profilePic:{
        type: String,
        default:""
    },
    nativeLanguage:{
        type: String,
        default:""
    },
    learningLanguage:{
        type: String,
        default:""
    },
    location:{
        type: String,
        default:""
    },
    // with this field we can decide if the user has access to other pages
    isOnBoarded:{
        type: Boolean,
        default: false
    },
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
    
},{timestamps: true})

//Before a user is saved to MongoDB, the password is encrypted (hashed)
// This is a pre middleware
// It runs BEFORE .save() is executed on a user document
// next is a callback function provided by Mongoose
userSchema.pre("save",async function(next){
    // Checks whether the password field was changed
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        // Combines password + salt
        // Converts it into a hashed string
        next();

    } catch (error) {
        next(error);
    }
})

userSchema.methods.matchPassword = async function (enteredPass){
    const isPasswordCorrect = await bcrypt.compare(enteredPass,this.password);
    return isPasswordCorrect;
}

const User = mongoose.model('User',userSchema)

export default User;
