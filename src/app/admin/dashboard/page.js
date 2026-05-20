"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const sections = [
    {
      title: "Hero",
      description: "Imagen principal de la portada",
      icon: "🎨",
      link: "/admin/sections/hero",
    },
    {
      title: "Quiénes Somos",
      description: "Imagen de la sección sobre nosotros",
      icon: "👥",
      link: "/admin/sections/nosotros",
    },
    {
      title: "Galería Instagram",
      description: "Fotos de Instagram",
      icon: "📸",
      link: "/admin/sections/gallery",
    },
    {
      title: "Logo",
      description: "Logo de la organización",
      icon: "⭐",
      link: "/admin/sections/logo",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">CJ</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Panel de Administración
              </h1>
              <p className="text-sm text-gray-600">Conectando Juntos UTS</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {session.user?.name || session.user?.email}
            </span>
            <Link
              href="/api/auth/signout"
              className="text-sm text-red-600 hover:text-red-800 font-medium"
            >
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Bienvenido, {session.user?.name?.split(" ")[0] || "Admin"}
          </h2>
          <p className="text-gray-600">
            Gestiona las imágenes y contenido del sitio web
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Acciones Rápidas
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Ver Sitio Web
            </Link>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link
              key={index}
              href={section.link}
              className="bg-white rounded-lg shadow hover:shadow-xl transition-all p-6 group"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm">{section.description}</p>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-gray-600 text-sm font-medium">
                Secciones Activas
              </h4>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">4</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-gray-600 text-sm font-medium">
                Imágenes Totales
              </h4>
              <span className="text-2xl">🖼️</span>
            </div>
            <p className="text-3xl font-bold text-gray-800">12+</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-gray-600 text-sm font-medium">
                Última Actualización
              </h4>
              <span className="text-2xl">⏰</span>
            </div>
            <p className="text-sm font-medium text-gray-800">Hoy</p>
          </div>
        </div>
      </main>
    </div>
  );
}
