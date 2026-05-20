import "./globals.css";

export const metadata = {
  title: "Conectando Juntos UTS - Fundación Estudiantil",
  description:
    "Somos un conglomerado de estudiantes del Instituto Tecnológico Antonio José de Sucre Extensión Barinas, comprometidos con ayudar a las comunidades más vulnerables.",
  keywords:
    "fundación, ayuda social, Barinas, Venezuela, estudiantes, solidaridad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
