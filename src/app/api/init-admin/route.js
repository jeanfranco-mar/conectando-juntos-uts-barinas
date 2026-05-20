import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { email, password, name, secret } = await request.json();

    // Verificar secreto para evitar creación no autorizada
    if (secret !== process.env.NEXTAUTH_SECRET) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    await dbConnect();

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "El usuario ya existe" },
        { status: 400 }
      );
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      role: "admin",
      isActive: true,
    });

    return NextResponse.json({
      success: true,
      message: "Usuario creado exitosamente",
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json(
      { error: "Error al crear usuario: " + error.message },
      { status: 500 }
    );
  }
}
