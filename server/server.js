import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express';
import {serve} from "inngest/express";
import { functions, inngest } from "./Inngest/index.js";

const app = express();
const port = process.env.PORT || 5000;
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());


// Routes :)
app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(port,()=>{
    console.log(`Server is listen on port ${port}`);
})