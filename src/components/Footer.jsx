"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 pb-6 px-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/assets/logo.png"
                alt="Conectando Juntos Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Conectando Juntos</span>
            </div>
            <p className="leading-relaxed">
              Somos un conglomerado de estudiantes del Instituto Tecnológico
              Antonio José de Sucre comprometidos con generar un impacto
              positivo en nuestra comunidad.
            </p>
          </div>

          {/* Carreras */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Carreras</h3>
            <ul className="space-y-2">
              <li>Ciencias Comerciales</li>
              <li>Informática</li>
              <li>Mercadotecnia</li>
              <li>Publicidad</li>
              <li>Turismo Servicios Turisticos</li>
              <li>Turismo Mencion Hoteleria</li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex justify-center items-center">
            <p className="text-sm m-0">
              © 2025 Conectando Juntos UTS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
