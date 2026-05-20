const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

// Configuración
const MONGODB_URI = "mongodb://localhost:27017/conectando-juntos";
const ADMIN_EMAIL = "admin@conectandojuntos.com";
const ADMIN_PASSWORD = "MiContraseña123!";
const ADMIN_NAME = "Administrador";

// Schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, default: "admin" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✓ Conectado a MongoDB");

    const existingUser = await User.findOne({ email: ADMIN_EMAIL });
    if (existingUser) {
      console.log("❌ El usuario ya existe");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

    const user = await User.create({
      email: ADMIN_EMAIL,
      password: hashedPassword,
      name: ADMIN_NAME,
      role: "admin",
      isActive: true,
    });

    console.log("✓ Usuario admin creado exitosamente");
    console.log("  Email:", user.email);
    console.log("  Nombre:", user.name);
    console.log("  Rol:", user.role);
    console.log(
      "\n¡Ahora puedes hacer login en http://localhost:3000/admin/login!"
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

createAdmin();
