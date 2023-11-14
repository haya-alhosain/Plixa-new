import Header from "@/app/components/Header/Header";
import About from "@/app/components/About/About";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import Services from "@/app/components/Services/Services";
import Video from "@/app/components/elements/Video/Video";
export default function Home() {
  return (
    <main>
        <Header />
        <Video />
        <About />
        <Services />
        <Contact />
        <Footer />
    </main>
  );
}
