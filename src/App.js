import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import "./scss/App.scss";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Experience from "./components/Experience.js";
import Portfolio from "./components/Portfolio.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

export default function App () {
    return (<>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
    </>)
}