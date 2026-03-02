import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsAppButton";


function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-grey-800">
      <Navbar />
      <div className="h-10"></div>
      <Hero />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default Home;