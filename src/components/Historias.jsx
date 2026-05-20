"use client";

import { useState } from "react";

export default function Historias() {
  const testimonios = [
    {
      nombre: "Katherine Zurita",
      rol: "Miembro activa",
      fecha: "25 Abril 2025",
      texto:
        "Ser parte de este equipo ha sido una de las experiencias más gratificantes de mi vida. Cada visita, cada sonrisa compartida y cada momento de conexión han reafirmado mi convicción de que juntos podemos hacer la diferencia. Ver la esperanza en los ojos de quienes ayudamos me motiva a seguir adelante, sabiendo que cada pequeño gesto tiene un gran impacto. Este proyecto no solo transforma vidas, también nos transforma a nosotros. Estoy profundamente agradecida de formar parte de esta hermosa labor.",
    },
    {
      nombre: "Lisbeth Flores",
      rol: "Conexión",
      fecha: "03 Mayo 2025",
      texto:
        "Ser el enlace en este maravilloso proyecto ha sido una experiencia enriquecedora y transformadora. Ver el impacto positivo que logramos en la comunidad me llena de satisfacción y orgullo. Cada esfuerzo, cada colaboración y cada sonrisa compartida demuestran que juntos podemos construir un mundo más solidario. Ser parte de este equipo no solo me ha permitido ayudar, sino también aprender, conectar y crecer como persona. Estoy profundamente agradecida por la oportunidad de sumar a esta iniciativa y seguir generando cambios reales en la vida de quienes más lo necesitan.",
    },
    {
      nombre: "Luis Diaz",
      rol: "Abuelo",
      fecha: "01 Mayo 2025",
      texto:
        "Ser atendido con cariño y respeto ha sido una experiencia que me ha llenado el corazón. Compartir mis recuerdos y sentirme escuchado me ha dado una nueva alegría. Ver a jóvenes comprometidos con ayudar a otros me llena de esperanza y gratitud. Saber que aún hay personas que valoran a quienes han vivido tantas historias es un regalo que nunca olvidaré.",
    },
    {
      nombre: "Yonaida Done",
      rol: "Apoyo",
      fecha: "06 Mayo 2025",
      texto:
        "Como madre, no hay mayor satisfacción que ver a mi hija comprometida con ayudar a quienes más lo necesitan. Saber que, al igual que yo como Licenciada en Enfermería, ella dedica su tiempo y esfuerzo para cuidar, escuchar y acompañar a otros me llena de orgullo y emoción. Es maravilloso ver que los valores de solidaridad y empatía se reflejan en su vocación, demostrando que juntos podemos hacer la diferencia en la vida de muchas personas.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonio = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonio = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonios.length) % testimonios.length
    );
  };

  return (
    <section id="historias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Historias que cautivan el alma
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Cada experiencia compartida aquí es un reflejo del impacto que
            juntos podemos lograr. Descubre relatos llenos de esperanza,
            solidaridad y transformación, donde cada momento vivido demuestra
            que ayudar cambia vidas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonio Card */}
          <div className="bg-linear-to-br from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {testimonios[currentIndex].nombre}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="font-medium">
                  {testimonios[currentIndex].rol}
                </span>
                <span>{testimonios[currentIndex].fecha}</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              {testimonios[currentIndex].texto}
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonio}
                className="bg-pink-800 text-white rounded-full p-3 hover:bg-pink-900 transition-colors"
                aria-label="Anterior testimonio"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-pink-800 w-8"
                        : "bg-pink-300 hover:bg-pink-800"
                    }`}
                    aria-label={`Ir al testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonio}
                className="bg-pink-800 text-white rounded-full p-3 hover:bg-pink-900 transition-colors"
                aria-label="Siguiente testimonio"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
