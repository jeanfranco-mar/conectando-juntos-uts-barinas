"use client";

export default function Calendario() {
  const eventos = [
    {
      fecha: "08/12",
      titulo: "Entrega de cotillones en el preescolar Bomba Lara",
      descripcion:
        "Acompáñanos en la entrega de cotillones navideños a los niños del preescolar Bomba Lara, llevando sonrisas y alegría a sus corazones.",
    },
    {
      fecha: "08/12",
      titulo: "Tarde de peliculas navideñas",
      descripcion:
        "Disfrutaremos de una tarde llena de magia y alegría, compartiendo risas y momentos inolvidables.",
    },
    {
      fecha: "11/12",
      titulo: "Parrandon navideño en el tecnológico",
      descripcion:
        "Únete a nosotros para celebrar la temporada navideña con música, comida y mucha diversión en el Instituto Tecnológico Antonio José de Sucre.",
    },
    {
      fecha: "13/12",
      titulo: "Preparacion de comida navideña en la capilla",
      descripcion:
        "Ayúdanos a preparar una deliciosa comida navideña para compartir con la comunidad del calvario.",
    },
  ];

  return (
    <section id="calendario" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Proyectos Masivos-Futuros
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center bg-gray-50 rounded-xl p-6 hover:bg-pink-50 transition-colors group"
            >
              {/* Fecha */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <div className="bg-pink-900 text-white rounded-lg p-4 text-center w-20">
                  <div className="text-2xl font-bold">
                    {evento.fecha.split("/")[0]}
                  </div>
                  <div className="text-sm">/{evento.fecha.split("/")[1]}</div>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors">
                  {evento.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {evento.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
