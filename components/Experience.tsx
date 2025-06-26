
function Experience() {
    return (
        <div className='experience container'>

            <div className='header'>
                <div className="right">
                    <div className='headline'>
                        <div className="bullet" />
                        Experience
                    </div>
                    <h3 className='explore'>Explore My Developer <br /> Journey</h3>
                </div>

                <div className="contact bg">
                    <a className='contact_cta' href='mailto:nazimudheenti@gmail.com'>
                        Contact Me
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7 7H17V17" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </a>
                </div>
            </div>

            <div className="experience__item">
                <div>
                    <h3>React Native Developer, Technopark, Trivandrum</h3>
                    <div className='headline'>
                        <div className="bullet" />
                        <span>May 2023 - January 2025</span>
                    </div>
                </div>
                <div>
                    Engineered a robust hybrid software solution for Diginest Solutions using React Native and JavaScript, ensuring seamless cross-platform functionality. Designed, developed, and maintained mobile and web applications tailored to diverse client needs, while actively collaborating on frontend development and ongoing feature enhancements.
                </div>
                <div className='btn__container'>
                    <div className='btn'>React Native</div>
                    <div className='btn'>Firebase</div>
                    <div className='btn'>react-native-elements</div>
                    <div className='btn'>Play store</div>
                    <div className='btn'>App store</div>
                </div>
            </div>

            <div className="experience__item">
                <div>
                    <h3>React Developer, Aluva, Eranakulam</h3>
                    <div className='headline'>
                        <div className="bullet" />
                        <span>January 2025 - Present</span>
                    </div>
                </div>
                <div>
                    Collaborated with the product team to develop ERP modules, focusing on HR and payroll management features. Built and maintained scalable user interfaces using React, TypeScript, and Redux Toolkit, with reusable components and centralized state management for consistent data flow. Worked alongside backend engineers and QA to ensure smooth feature delivery and rapid issue resolution.
                </div>
                <div className='btn__container'>
                    <div className='btn'>React</div>
                    <div className='btn'>Typescript</div>
                    <div className='btn'>Tailwindcss</div>
                    <div className='btn'>Context api</div>
                    <div className='btn'>Server hosting</div>
                </div>
            </div>
        </div>
    )
}

export default Experience