import mongoose from "mongoose";


const MONGODB_URI = process.env.URI_MONGO;

if (!MONGODB_URI) {
  throw new Error('Missing URI_MONGO');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectMongoose() {
  
  if (cached.conn) {
    return cached.conn;
  }


  if (!cached.promise) {
    const opts = {
      bufferCommands: false, 
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; 
    console.error("Database connection error:", e.message);
    throw e;
  }

  return cached.conn;
}