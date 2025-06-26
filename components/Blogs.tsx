import Image from 'next/image'
import React from 'react'


type Props = {
    image: string;
    title: string;
    read: number;
    type: string;
}[]

function Blogs() {

    const items: Props = [{ image: '', title: '', read: 2, type: '' }];

    return (
        <div className='container blogs'>
            <div className='header'>
                <div className='headline'>
                    <div className="bullet" />
                    Blogs
                </div>
                <h3 className='works'>Latest Blogs</h3>
            </div>

            {
                items?.map(({ image, title, read, type }) => (
                    <BlogCards key={title} image={image} title={title} read={read} type={type} />
                ))
            }
        </div>
    )
}

const BlogCards = ({ image, title, read, type }: Props) => (
    <div className='blog__card'>
        <div className="image">
            <Image src={image} alt='image.png' fill />
        </div>

        <div className='content'>
            <div className='type'>
                <p>{type}</p>
            </div>

            <span>{read} min read</span>
        </div>

        <p className='title'>{title}</p>
    </div>
)

export default Blogs