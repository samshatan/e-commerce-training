import mongoose, {mongo, Schema} from 'mongoose';


const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      index: true
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    confirmPassword: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    },
    refreshToken: {
      type: String
    }
  },{
    timestamps: true
  }
)

userSchema.pre("save", async function (next){
  if(!this.isModified("password")){
    return next();
  }
})

userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccesToekn = function(){
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
};

userSchema.methods.generateRefreshToken = function(){
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = new mongoose.model("User", userSchema);