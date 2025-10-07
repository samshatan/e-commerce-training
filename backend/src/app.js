import express from "express"
import userRoute from "./routes/user.routes.js"
const app = express()

app.use(cors({
  origin: process.removeListener.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes Imports

app.use("/api/v1/users", userRoute);

export default app;