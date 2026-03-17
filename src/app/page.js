import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TechCarousel from "./components/TechCarousel";



export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

        <div className="absolute w-190 h-190 bg-green-700 rounded-full blur-[200px] opacity-40 animate-aurora -top-50 -left-50"></div>

        <div className="absolute w-225 h-225 bg-blue-700 rounded-full blur-[200px] opacity-40 animate-aurora2 -bottom-75 -right-50"></div>

        <div className="absolute w-225 h-225 bg-orange-700 rounded-full blur-[200px] opacity-30 animate-aurora3 top-[40%] left-[18%]"></div>

      </div>
      <Navbar />
      <Hero />
      <About />
      <TechCarousel />
      <Projects />
      <Contact />
    </main>
  );
}

