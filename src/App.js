import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import "./scss/App.scss";
import About from "./components/About.js";

export default function App () {
    return (<>
        <Navbar />
        <Home />
        <About />
    </>)
}