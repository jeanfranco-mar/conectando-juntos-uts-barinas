import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Section from "@/models/Section";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const sectionId = searchParams.get("sectionId");

    if (sectionId) {
      const section = await Section.findOne({ sectionId });
      return NextResponse.json(section || { images: [] });
    }

    const sections = await Section.find({ isActive: true }).sort({ order: 1 });
    return NextResponse.json(sections);
  } catch (error) {
    console.error("Error al obtener secciones:", error);
    return NextResponse.json(
      { error: "Error al obtener las secciones" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { sectionId, ...updateData } = body;

    await dbConnect();

    const section = await Section.findOneAndUpdate({ sectionId }, updateData, {
      new: true,
      upsert: true,
    });

    return NextResponse.json(section);
  } catch (error) {
    console.error("Error al actualizar sección:", error);
    return NextResponse.json(
      { error: "Error al actualizar la sección" },
      { status: 500 }
    );
  }
}
