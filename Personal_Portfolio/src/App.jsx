import About from "./components/About";
import Achievements from "./components/Achievements";
import CodingProfile from "./components/CodingProfile";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#050816] min-h-screen">

      <Navbar />

      {/* HOME */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      {/* ABOUT + SKILLS */}
      <section id="about" className="px-6 py-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2">
            <About />
          </div>

          <div id="skills" className="lg:col-span-3 scroll-mt-24">
            <Skills />
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* ACHIEVEMENTS + CODING PROFILE */}
      <section id="achievements" className="px-4 py-6 scroll-mt-24">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-6 gap-6">

          <div className="lg:col-span-2">
            <Achievements />
          </div>

          <div className="lg:col-span-4">
            <CodingProfile />
          </div>

        </div>
      </section>

      {/* EDUCATION + CONTACT */}
      <section id="Education" className="px-4 py-6 scroll-mt-24">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-6 gap-6">

          <div className="lg:col-span-2">
            <Education />
          </div>

          <div className="lg:col-span-4">
            <ContactMe />
          </div>

        </div>
      </section>

      {/* CONTACT (optional separate id if needed) */}
      <section id="contact"></section>

      <Footer />

    </div>
  );
}

export default App;
