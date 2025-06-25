
function Navbar() {
    return (
        <div className='navbar'>
            <ul className='links'>
                <li>
                    About Me
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Services
                </li>
                <li>
                    Blog
                </li>
            </ul>

            <div className="contact">
                <a className='contact_cta' href='mailto:nazimudheenti@gmail.com'>
                    Contact Me
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 7H17V17" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                </a>
            </div>
        </div>
    )
}

export default Navbar