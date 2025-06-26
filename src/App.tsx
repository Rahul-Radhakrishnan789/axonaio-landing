import { Faq } from "./components/FAQ/faq"
import { Footer } from "./components/Footer/footer"
import GameCards from "./components/Games/games"
import { HeroSection } from "./components/Hero/hero"
import Navbar from "./components/Navbar/navbar"

function App() {
  return (
    <div className="flex min-h-svh flex-col ">
     <Navbar/>
     <HeroSection/>
     <GameCards/>
     <Faq/>
     <Footer/>
    </div>
  )
}

export default App