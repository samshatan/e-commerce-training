import { User } from "../models/user.model";
import ApiError from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";

const verifyJwt = asyncHandler(async (req, __, next) =>{
  try {
    const token = req.cookies?.accesToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token){
      throw new ApiError(401, "Unauthorised Request");
    }

    const decodeToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodeToken?._id).select("-password -refreshToken");

    if(!user){
      throw new ApiError(401,"Invalid Access Token");
    }

    req.user = user;
    next();


  } catch (error) {
    throw new ApiError(401,error?.message || "Invalid access token");
  }
})

export default verifyJwt;