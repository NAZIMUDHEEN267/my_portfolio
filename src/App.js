import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import "./scss/App.scss";
import About from "./components/About.js";
import Services from "./components/Services.js";
import Experience from "./components/Experience.js";

export default function App () {
    return (<>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Experience />
    </>)
}