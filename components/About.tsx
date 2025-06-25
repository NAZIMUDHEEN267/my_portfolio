import React from 'react'

function About() {
    return (
        <div className='about container'>
            <div className='about__text'>
                <h2>About Me</h2>
                <p>
                    I am a passionate and results-driven React Native and React Developer with over 2 years of experience building high-quality mobile and web applications. I specialize in cross-platform development, ensuring consistent performance across Android, iOS, and web platforms. With a strong background in e-commerce, food delivery, and ERP systems, I focus on delivering intuitive user experiences and scalable architecture. I’ve contributed to multiple successful projects from idea to production, integrating real-time features, secure payment gateways, and responsive designs using modern frontend technologies like Redux Toolkit, Tailwind CSS, and TypeScript.
                </p>
            </div>
            <div className='about__bullets'>
                <div>
                    <Icon />
                    <p>
                        Over 2 years of hands-on experience in React Native and React development.
                    </p>
                </div>
                <div>
                    <Icon />
                    <p>
                        Built and deployed full-scale mobile applications using React Native, delivering stable and consistent experiences across Android and iOS platforms.
                    </p>
                </div>
                <div>
                    <Icon />
                    <p>
                        Published 5+ production-ready apps on Play Store and App Store, handling real users, live orders, and secure payments.
                    </p>
                </div>
                <div>
                    <Icon />
                    Collaborated with backend and QA teams, ensuring timely delivery, bug fixes, and optimized user journeys.
                </div>
                <div>
                    <Icon />
                    Worked on HR and Payroll ERP modules, developing salary, attendance, and employee management features in a scalable structure.
                </div>
                <div>
                    <Icon />
                    Followed secure development practices, ensuring data safety, authentication flow, and transaction integrity.
                </div>
            </div>
        </div>
    )
}

const Icon = () => {
    return (
        <div className='icon'>
            <svg width="15px" height="15px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L13.4302 8.31181C13.6047 8.96 13.692 9.28409 13.8642 9.54905C14.0166 9.78349 14.2165 9.98336 14.451 10.1358C14.7159 10.308 15.04 10.3953 15.6882 10.5698L21 12L15.6882 13.4302C15.04 13.6047 14.7159 13.692 14.451 13.8642C14.2165 14.0166 14.0166 14.2165 13.8642 14.451C13.692 14.7159 13.6047 15.04 13.4302 15.6882L12 21L10.5698 15.6882C10.3953 15.04 10.308 14.7159 10.1358 14.451C9.98336 14.2165 9.78349 14.0166 9.54905 13.8642C9.28409 13.692 8.96 13.6047 8.31181 13.4302L3 12L8.31181 10.5698C8.96 10.3953 9.28409 10.308 9.54905 10.1358C9.78349 9.98336 9.98336 9.78349 10.1358 9.54905C10.308 9.28409 10.3953 8.96 10.5698 8.31181L12 3Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default About