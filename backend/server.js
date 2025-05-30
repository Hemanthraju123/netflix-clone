import express from "express";
import cookieParser from 'cookie-parser';


import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ProtectRoute } from "./middleware/protectRoute.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB} from "./config/db.js";


const app = express();
const PORT = ENV_VARS.port;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie", ProtectRoute,movieRoutes);
app.use("/api/v1/tv",ProtectRoute,tvRoutes);
app.use("/api/v1/tv",ProtectRoute,searchRoutes);

app.listen(PORT,() => {
    console.log("server started at http://localhost:"+ PORT);
    connectDB();
});

