import Header from "./components/Header"
import { Hero } from "./components/Hero"
import Projects from "./components/Projects"
import Quote from "./components/Quote"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Stats from "./components/Stats"

function App() {

  return (
    <div className="bg-background md:grid md:gap-y-4">
        <Header/>
        <Hero/>
        <Quote/>
        <Projects/>
        <Stats/>
        <AboutMe/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
