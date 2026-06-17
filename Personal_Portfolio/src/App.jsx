import About from "./components/About"
import Achievements from "./components/Achievements"
import CodingProfile from "./components/CodingProfile"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  return (
    <div className="bg-[#050816] min-h-screen">
<Navbar />
<Hero />
<section className="px-6 py-6">
 <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">  
  <div className="lg:col-span-2">
    <About />
  </div>
  <div className="lg:col-span-3">
<Skills />
</div>
 </div>
</section>
<Projects />
<section className="px-6 py-6">
 <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">  
  <div className="lg:col-span-2">
    <Achievements />
  </div>
  <div className="lg:col-span-3">
<CodingProfile />
</div>
 </div>
</section>



    </div>
  )
}

export default App
