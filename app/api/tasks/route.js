import { connectDB } from "@lib/mongodb/mongoose";
import Task from "@lib/models/models";
import { NextResponse } from "next/server";

export async function GET(){
  await connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks)
};

export async function POST(request, {params}){
  try{
    const data = await request.json();
    const newTask = new Task(data);
    const savedTask = await newTask.save();
    return NextResponse.json(savedTask)
  }catch(error){
    return NextResponse.json(error.message,{
      status:400,
    })
  }
}