import 'dotenv/config';import mongoose from 'mongoose';import {app} from './app.js';
const port=Number(process.env.PORT??4000);const uri=process.env.MONGODB_URI;
if(!uri){console.warn('MONGODB_URI is not set. API routes requiring data will be unavailable.');app.listen(port,()=>console.log(`API listening on http://localhost:${port}`))}else{mongoose.connect(uri).then(()=>app.listen(port,()=>console.log(`API listening on http://localhost:${port}`))).catch(error=>{console.error('Database connection failed',error);process.exit(1)})}
