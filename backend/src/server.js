import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from "path";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import cookieParser from "cookie-parser";

const __dirname= path.resolve();



const app = express();

const PORT =ENV.PORT|| 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req,res) =>{
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}


const startServer = async () => {
    try {
        // Connect to database first
        await connectDB();
        console.log('✅ Database connected');
        
        // Then start the server
        app.listen(PORT, '0.0.0.0', () => { 
            console.log(`✅ Server running on 0.0.0.0:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();