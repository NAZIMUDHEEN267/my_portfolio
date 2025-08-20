'use client';

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function Navbar() {

    const [show, setShow] = useState(false);

    const ref = useRef<null>(null);

    useEffect(() => {
        ref.current?.("click", function () {
            console.log('called');

            const target = document.getElementById("about");
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }, [])


    const handleClick = () => {
        setShow(state => !state)
        console.log(" clicked meee");
        
    }

    return (
        <>
            <div className={`toggle_bar ${show && 'hidden'}`} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </div>

            {
                show && (
                    <div className='navbar'>
                        <div className={`cross`} onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>


                        <ul className='links'>
                            <a href="#about" onClick={(e) => {
                                console.log('called me');
                                e.preventDefault();
                                const target = document.getElementById("about");

                                if (target) {
                                    target.scrollIntoView({ behavior: "smooth" });
                                }
                            }}>
                                About Me
                            </a>
                            <a href="#portfolio">
                                Portfolio
                            </a>
                            <a href="#services">
                                Services
                            </a>
                            <a href="#blog">
                                Blog
                            </a>
                        </ul>

                        <div className="contact">
                            <Link className='contact_cta' href='mailto:nazimudheenti@gmail.com'>
                                Contact Me
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 7H17V17" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navbar