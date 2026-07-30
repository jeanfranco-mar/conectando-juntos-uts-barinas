"use client";

export default function ProximasActividades() {
  const actividades = [
    {
      numero: "01",
      titulo: "Entrega de desayunos en Martha y Maria",
    },
    {
      numero: "02",
      titulo: "Jornada recreativa infantil al aire libre en las instalaciones integradas de la Posada La Pechera.",
    },
    {
      numero: "03",
      titulo: "Impartición de charlas formativas sobre proyectos de estudio a futuro y seguridad vial para alumnos de bachillerato.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Actividades Realizadas
          </h2>

          <div className="mt-12 space-y-6">
            {actividades.map((actividad) => (
              <div
                key={actividad.numero}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex items-start space-x-4"
              >
                <span className="text-5xl font-bold text-pink-800/40">
                  {actividad.numero}
                </span>
                <p className="text-lg text-gray-700 flex-1 pt-3">
                  {actividad.titulo}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#calendario"
              className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Ver calendario completo →
            </a>
          </div>
        </div>

        {/* Contador */}
        <div className="text-center mt-20">
          <div className="inline-block bg-primary text-white px-12 py-8 rounded-2xl shadow-xl">
            <div className="text-6xl font-bold mb-2">+30</div>
            <div className="text-xl">
              Personas comprometidas en esta maravillosa labor!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
