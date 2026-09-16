import { connectDB } from "@/lib/mongodb";
import profile from "@/models/profile";

export async function GET(request) {
    try {
        await connectDB()

        const users = await profile.find({})

        return Response.json(
            { users: users },
            { status: 200 }
        )
    }
    
    catch (error) {
        return Response.json(
            { error: "Failed to fetch profiles" },
            { status: 500 }
        )
    }
}