"use client";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/homepage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hey! Estamos <span className="text-pink-800">Conectando</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Juntos por una causa noble
        </h2>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
          creando conexiones y uniendo corazones para cambiar el destino de
          personas
        </p>

        <a
          href="#nosotros"
          className="inline-block text-white bg-pink-800 font-bold py-4 px-8 rounded-full hover:bg-pink-900 transition-all transform hover:scale-105 shadow-lg"
        >
          Ayúdanos a lograrlo
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
