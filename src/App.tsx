import Header from "./components/Header"
import { Hero } from "./components/Hero"
import Projects from "./components/Projects"
import Quote from "./components/Quote"
import AboutMe from "./components/Experience"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Stats from "./components/Stats"
import { TranslationProvider } from "./i18n/TranslationProvider";

function App() {
  return (
    <TranslationProvider>
      <div className="bg-background md:grid ">
        <Header />
        <Hero />
        <Quote />
        <Projects />
        <Stats />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </TranslationProvider>
  )
}

export default App
