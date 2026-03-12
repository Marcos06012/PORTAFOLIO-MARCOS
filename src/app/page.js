import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">

        <div className="absolute w-190 h-190 bg-green-500 rounded-full blur-[200px] opacity-40 animate-aurora -top-50 -left-50"></div>

        <div className="absolute w-225 h-225 bg-blue-500 rounded-full blur-[200px] opacity-40 animate-aurora2 -bottom-75 -right-50"></div>

        <div className="absolute w-225 h-225 bg-orange-500 rounded-full blur-[200px] opacity-30 animate-aurora3 top-[40%] left-[18%]"></div>

      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

