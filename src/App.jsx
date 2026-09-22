import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  const name = "React";
  return <>
  <Navbar />
  <Hero />
  <Portfolio />
  <About />
  <Contact />
  <Footer /> 
  </>
}
export default App;