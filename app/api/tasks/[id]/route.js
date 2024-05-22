import { NextResponse } from "next/server";
import { connectDB } from "@lib/mongodb/mongoose";
import Task from '@lib/models/models';

export async function GET(request,{params}){
  try{
    await connectDB();
    const taskFound = await Task.findById(params.id);
  
    return NextResponse.json(taskFound)
  }catch(error){
    return NextResponse.json(error.message,{
      status: 400,
    })
  }
}

export async function POST(request,{params}){
  return NextResponse.json({message:`Agregando tarea N° ${params.id}`})
}
export async function DELETE(request,{params}){
  try{
    const taskDelete = await Task.findByIdAndDelete(params.id);

    if(!taskDelete){
      return NextResponse.json({
        message: 'Task not found',
      }, {status:400})
    }
    return NextResponse.json(taskDelete)
  }catch(error){ 
    return NextResponse.json(error.message,{status:400})
  }
}

export async function PUT(request,{params}){
  try{
    const data = await request.json();
    const taskUpdate = await Task.findByIdAndUpdate(params.id,data,{
      new: true
    })
    return NextResponse.json(taskUpdate)
  }catch(error){
    return NextResponse.json(error.message,{status:400})
  }
}