"use client";

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <div
              className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
              style={{ backgroundImage: "url('/assets/quienes-somos.jpg')" }}
            >
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>

            {/* Contenido */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Quiénes <span className="text-pink-800">Somos?</span>
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Somos un conglomerado de estudiantes del Instituto Tecnológico{" "}
                <strong>Antonio José de Sucre</strong> Extensión Barinas.
                Nuestra misión es apoyar a las comunidades y personas que más lo
                necesitan, llevando ayuda y esperanza.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nos enfocamos en brindar apoyo y acompañamiento a personas en
                situación de vulnerabilidad. Cada uno de nosotros aporta desde
                nuestras carreras como Publicidad, Informática, Turismo,
                Mercadotecnia y Ciencias Comerciales.
              </p>

              <div className="bg-pink-50 border-l-4 border-pink-800 p-6 rounded-r-lg">
                <div className="text-5xl font-bold text-pink-800 mb-2">06</div>
                <div className="text-gray-700 font-semibold">
                  Carreras dando lo mejor de sí.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
