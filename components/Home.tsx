import Image from 'next/image'
import React from 'react'

function Home() {
    return (
        <div className='home'>
            <div className='column__1'>

                <div className="content">
                    <div className='project'>
                        <h2>+200</h2>
                        <p>Project contributed</p>
                    </div>
                    <div className='work'>
                        <h2>+2</h2>
                        <p>Companies worked</p>
                    </div>
                </div>

                <div className='name'>
                    <h3>Hello</h3>
                    <p>-- It&apos;s Nazimudheen</p>
                </div>
            </div>

            <div className='column__2'>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src={'/user.png'}
                        fill
                        objectFit='fill'
                        alt='user.png' />
                </div>
            </div>
        </div>
    )
}

export default Home