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
    <main className="flex min-h-screen flex-col bg-[#003060] ">
      {/* </main><main className="flex min-h-screen flex-col bg-[#050A30] ">
  </main><main className="flex min-h-screen flex-col bg-[#003B73] "> */}
      <Navbar />
      {/* <div className="container lg:mt-40 mx-auto px-12 py-4"> */}
      <div className="container mt-24 mx-auto px-12 py-4">
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
