import React from 'react'
import MarqueeLib from 'react-fast-marquee'
const Marquee = MarqueeLib.default || MarqueeLib

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary p-2'>Latest</p>
            <Marquee className="flex gap-5" pauseOnHover={true} speed={50}>
                <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nostrum nihil error id animi.</p>
                <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nostrum nihil error id animi.</p>
                <p className='font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nostrum nihil error id animi.</p>
            </Marquee>
        </div>  
    )
}

export default LatestNews