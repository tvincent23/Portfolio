import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex mih-h-screen flx-col bg-[#050A30] mx-auto py-4 sm:px-12  ">
      {/* colour options #003B73 003060 */}

      <Navbar />

      <div className="container mt-24 md:mt-48 mx-auto px-2 sm:px-12 py-4">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
