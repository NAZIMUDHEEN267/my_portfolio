'use client';

import Image from "next/image"
import { useState } from "react"

function Collaboration() {

    const [clicked, setClicked] = useState(false);

    const data = [
        {
            name: 'AYUR-DX - Ayur Dx- Cure and Consultation',
            link: '/ayurdx.png',
            path: 'https://play.google.com/store/apps/details?id=com.diginest.ayurdx&pcampaignid=web_share',
            company: 'Diginest solution pvt lmt',
            type: 'mobile app'
        },
        {
            name: 'Bitesmate - Food ordering app',
            link: '/bitesmate.jpg',
            path: 'https://apps.apple.com/in/app/bitesmate/id6736759744',
            company: 'Diginest solution pvt lmt',
            type: 'mobile app'
        },
        {
            name: 'QbuyPanda - E-Commerce platform',
            link: '/qbuypanda.png',
            path: 'https://play.google.com/store/apps/details?id=com.qbuypanda.app&pcampaignid=web_share',
            company: 'Diginest solution pvt lmt',
            type: 'mobile app'
        },
        {
            name: 'Lavesco - Job portal',
            link: '/lavesco.png',
            path: 'https://play.google.com/store/apps/details?id=com.diginest.LavescoJobs',
            company: 'Diginest solution pvt lmt',
            type: 'mobile app'
        },
        {
            name: 'Rightpath - Customer Web App',
            link: '/rightpath.jpg',
            path: 'https://rightpathcustomer.diginestsolutions.in/',
            company: 'Diginest solution pvt lmt',
            type: 'Web app'
        },
        {
            name: 'Bitesmate - Admin Web App',
            link: '/bitesmate.jpg',
            path: 'https://bitesmateadmin.diginestsolutions.in/',
            company: 'Diginest solution pvt lmt',
            type: 'website'
        },
        {
            name: 'Privacy - ERP solution',
            company: 'Lifisin technologies pvt lmt',
            path: '#',
            type: 'website'
        },
        {
            name: 'Rightpath - Customer Web App',
            link: '/rightpath.jpg',
            path: 'https://play.google.com/store/apps/details?id=com.diginest.rightpathcustomer&pcampaignid=web_share',
            company: 'Diginest solution pvt lmt',
            type: 'mobile app'
        },
    ]

    return (
        <div className='collaboration container'>

            <div className='header'>
                <div className='headline'>
                    <div className="bullet" />
                    Portfolio
                </div>
                <h3 className='works'>Latest Works</h3>
            </div>


            <div className="work_items">
                {
                    data?.slice(0, !clicked ? 3 : data.length).map((item, i) => (
                        <div key={i}>
                            <a className="work__item" href={item?.path}>
                                <div className="image-container">
                                    <Image
                                        src={item?.link}
                                        alt="image.png"
                                        fill
                                        className="image"
                                    />

                                    <div className="overlay">
                                        <div className='icon'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>

                                        <p className="type">{item?.type}</p>
                                    </div>
                                </div>
                            </a>

                            <div className="item">
                                <p>{item?.name}</p>
                                <span>{item?.company}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="view_more" onClick={() => setClicked(!clicked)}>
                {
                    !clicked &&
                    <div>
                        <span>Check out More</span>
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3153 16.6681C15.9247 17.0587 15.9247 17.6918 16.3153 18.0824C16.7058 18.4729 17.339 18.4729 17.7295 18.0824L22.3951 13.4168C23.1761 12.6357 23.1761 11.3694 22.3951 10.5883L17.7266 5.9199C17.3361 5.52938 16.703 5.52938 16.3124 5.91991C15.9219 6.31043 15.9219 6.9436 16.3124 7.33412L19.9785 11.0002L2 11.0002C1.44772 11.0002 1 11.4479 1 12.0002C1 12.5524 1.44772 13.0002 2 13.0002L19.9832 13.0002L16.3153 16.6681Z" fill="#0F0F0F" />
                        </svg>
                        <p>View More</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Collaboration