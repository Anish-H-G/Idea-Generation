
import Features from "./components/Features"
import Hero from "./components/Hero"
import PopularHero from "./components/PopularHero"


function App() {
  return (
    <div className="bg-main font-medium text-2xl w-full ">
     <Hero/>
     <Features/>
     <PopularHero/>
    </div>
  )
}

export default App
