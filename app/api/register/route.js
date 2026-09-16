import { connectDB } from "@/lib/mongodb";
import user from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {

    const body = await request.json();
    const { name, username, email, password } = body;

    if (!name || !username || !email || !password) {
        return Response.json(
            { message: "All fields are required" },
            { status: 400 }
        );
    }
    await connectDB();

    const data = await user.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    });

    if (data) {
        return Response.json(
            { message: "Email or username already exists" },
            { status: 409 }
        );
    }

    const pass = await bcrypt.hash(password, 10)

    const userdata = await user.create({
        name: name,
        username: username,
        email: email,
        password: pass
    }
)

    return Response.json(
        { message: "User registered successfully" },
        { status: 201 }
    );
}

