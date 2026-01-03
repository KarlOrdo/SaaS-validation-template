import { NextResponse } from "next/server";
import connectMongoose from "@/lib/mongoose";
import Emails from "@/models/Emails";

export async function POST(req) {
    
    try{
        const body = await req.json();
        if(!body.email) return NextResponse.json({error: "Email required"});

        await connectMongoose();

       
        
        await Emails.create({
            email: body.email,
        });

        return NextResponse.json({});


    }catch(e){
        if (e.code === 11000) {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }
        
        return NextResponse.json({error: e.message}, {status: 500})
    }
}