import Header from "./components/header"
import { Hero } from "./components/Hero"
import Projects from "./components/Projects"
import Quote from "./components/Quote"
import AboutMe from "./components/AboutMe"

function App() {

  return (
    <div className=" ">
        <Header/>
        <Hero/>
        <Quote/>
        <Projects/>
        <AboutMe/>
    </div>
  )
}

export default App
