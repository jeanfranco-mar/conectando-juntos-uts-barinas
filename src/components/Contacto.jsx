"use client";

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Contáctanos!
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Dirección */}
          <div className="text-center p-8 bg-linear-to-br from-pink-100 to-pink-200 rounded-2xl">
            <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Dirección</h3>
            <p className="text-gray-600">
              Av. Cuatricentenaria frente al comando de zona GNB #33
            </p>
          </div>

          {/* Email */}
          <div className="text-center p-8 bg-linear-to-br from-pink-100 to-pink-200 rounded-2xl">
            <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Email</h3>
            <a
              href="mailto:conectando.juntos@gmail.com"
              className="text-pink-800 hover:text-pink-900 font-bold break-all"
            >
              conectando.juntos@gmail.com
            </a>
          </div>

          {/* Teléfono */}
          <div className="text-center p-8 bg-linear-to-br from-pink-100 to-pink-200 rounded-2xl">
            <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Teléfono</h3>
            <a
              href="https://wa.link/vjz17j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-800 hover:text-pink-900 font-bold"
            >
              +58 424-501-2031
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            ¿Quieres ser parte del cambio? Contáctanos y únete a nuestra misión
          </p>
          <a
            href="https://wa.link/vjz17j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
