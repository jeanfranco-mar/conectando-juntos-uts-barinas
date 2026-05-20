import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProximasActividades from "@/components/ProximasActividades";
import QuienesSomos from "@/components/QuienesSomos";
import Metas from "@/components/Metas";
import Calendario from "@/components/Calendario";
import FormaParte from "@/components/FormaParte";
import Historias from "@/components/Historias";
import InstagramGallery from "@/components/InstagramGallery";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProximasActividades />
      <QuienesSomos />
      <Metas />
      <Calendario />
      <FormaParte />
      <Historias />
      <InstagramGallery />
      <Contacto />
      <Footer />
    </main>
  );
}
