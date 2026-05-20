"use client";

export default function Metas() {
  const metas = [
    {
      titulo: "Misión",
      contenido:
        "Somos un conglomerado estudiantil comprometido con generar un impacto positivo en la vida de personas en estado de vulnerabilidad, ya sean niños o adultos mayores. A través de donaciones, visitas, juegos y momentos de alegría, buscamos conectar, unir y transformar, haciendo que cada instante cuente y recordando que el presente es la mejor oportunidad para cambiar vidas.",
      color: "blue",
    },
    {
      titulo: "Visión",
      contenido:
        "Aspiramos a ser un movimiento estudiantil inspirador y solidario, reconocido por nuestra capacidad de generar esperanza, unión y transformación en cada comunidad que tocamos. Nos visualizamos como un puente de amor y apoyo que, con pequeños gestos, logra grandes cambios, promoviendo una sociedad más empática, inclusiva y llena de humanidad.",
      color: "purple",
    },
    {
      titulo: "Logros",
      contenido:
        "Buscamos generar momentos de felicidad y esperanza en personas vulnerables, inspirando la solidaridad en nuestra comunidad estudiantil. Queremos construir una red de apoyo sostenible, demostrar que pequeños gestos pueden transformar vidas y expandir nuestro alcance para impactar a más personas. Cada acción cuenta, y ahora es el momento de hacer la diferencia.",
      color: "green",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-700",
    purple: "from-purple-500 to-purple-700",
    green: "from-green-500 to-green-700",
  };

  return (
    <section id="mision" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Metas
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Nuestros pilares fundamentales que guían cada una de nuestras acciones
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {metas.map((meta, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div
                className={`h-3 bg-linear-to-r from-pink-700 to-pink-900`}
              ></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {meta.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {meta.contenido}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
