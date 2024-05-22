import { NextResponse } from "next/server";
import User from '../models/models';
import { connectDB } from "@lib/mongodb/mongoose";

export async function CreateUser({
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
}  
){
  try{
    await connectDB();
    const newUser = await new User({
      id,
      first_name,
      last_name,
      image_url,
      email_addresses,
      username
    });
    console.log(newUser)
    const saveUser = await newUser.save();
    return NextResponse.json(saveUser)
  }catch(error){
    return NextResponse.json(error.message,{status:400})
  }
}