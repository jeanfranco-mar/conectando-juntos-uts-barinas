import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { uploadImage } from "@/lib/cloudinary";
import dbConnect from "@/lib/mongodb";
import Section from "@/models/Section";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");
    const sectionId = formData.get("sectionId");
    const alt = formData.get("alt") || "";

    if (!file) {
      return NextResponse.json(
        { error: "No se proporcionó ningún archivo" },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const result = await uploadImage(base64File, "conectando-juntos");

    // Save to database if sectionId is provided
    if (sectionId) {
      await dbConnect();

      const imageData = {
        url: result.url,
        publicId: result.publicId,
        alt: alt,
      };

      await Section.findOneAndUpdate(
        { sectionId },
        {
          $push: { images: imageData },
        },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({
      success: true,
      url: result.url,
      publicId: result.publicId,
    });
  } catch (error) {
    console.error("Error al subir imagen:", error);
    return NextResponse.json(
      { error: "Error al subir la imagen" },
      { status: 500 }
    );
  }
}
