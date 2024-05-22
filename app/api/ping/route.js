const { NextResponse } = require("next/server");
import { connectDB } from "@lib/mongodb/mongoose";

export async function GET(){
  await connectDB();
  return NextResponse.json({message: 'hello word'})
}