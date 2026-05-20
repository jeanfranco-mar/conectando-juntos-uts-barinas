"use client";

export default function FormaParte() {
  const formas = [
    {
      numero: "01",
      titulo: "Ayúdanos",
      descripcion:
        "a cambiar vidas con pequeños gestos llenos de amor y solidaridad.",
    },
    {
      numero: "02",
      titulo: "Todo es Posible",
      descripcion:
        "cuando nos unimos por un propósito mayor. Juntos hacemos la diferencia.",
    },
    {
      numero: "03",
      titulo: "Juntos",
      descripcion:
        "podemos llevar esperanza, salud y felicidad a quienes más lo necesitan.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Forma <span className="text-pink-800">parte</span> de esta hermosa
            labor
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {formas.map((forma) => (
            <div
              key={forma.numero}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-6xl font-bold text-pink-800/40 mb-4">
                {forma.numero}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {forma.titulo}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {forma.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block bg-pink-800 text-white font-bold py-4 px-8 rounded-full hover:bg-pink-900 transition-all transform hover:scale-105 shadow-lg"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
