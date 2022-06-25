
import { GoThreeBars } from "react-icons/go";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {

    // nav bar links function
    const links = (drop) => {
        return (
            <>
                {["#Home", "#About", "#Services", "#Experience", "#Portfolio", "#Contact"].map((link, i) => {
                return (
                    <ScrollIntoView selector={link} smooth={true}>
                        <li className={(drop) ? `link-${i}` : "link"} key={i}>{link.slice(1, link.length)}</li>
                    </ScrollIntoView>
                )
                })}
            </>
        )
    }

    const dropMenu = () => {
        const bar = document.querySelector(".drop__links");
        bar.classList.toggle("animation");
    }

    return (
        <header className="header">

            {/* navbar */}
            <nav className="nav width">
                <div className="nav__name">
                    <a href="#home">
                        <h1>Nazimudheen</h1>
                    </a>
                </div>

                <ul className="nav__links">{links()}</ul>

                {/* bar icon for show nav links */}
                <div className="nav__bars">
                    <GoThreeBars className="bar__icon" onClick={dropMenu} />
                </div>
            </nav>

            {/* drop down nav links when user click bar icon it will show*/}
            <ul className="drop__links">{links(true)}</ul>
        </header>

    )
}

export default Navbar;








































