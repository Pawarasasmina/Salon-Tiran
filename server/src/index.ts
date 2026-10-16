import {config} from 'dotenv';import mongoose from 'mongoose';import {app} from './app.js';
config({path:new URL('../.env',import.meta.url)});
config({path:new URL('../../.env',import.meta.url)});
const port=Number(process.env.PORT??4000);const uri=process.env.MONGODB_URI;
if(!uri){console.warn('MONGODB_URI is not set. API routes requiring data will be unavailable.');app.listen(port,()=>console.log(`API listening on http://localhost:${port}`))}else{mongoose.connect(uri,{dbName:'salon_tiran',serverSelectionTimeoutMS:10_000}).then(()=>app.listen(port,()=>console.log(`API listening on http://localhost:${port}`))).catch(error=>{console.error('Database connection failed:',error instanceof Error?error.message:'Unknown connection error');process.exit(1)})}
