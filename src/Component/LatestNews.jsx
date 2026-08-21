import React from 'react'
import MarqueeLib from 'react-fast-marquee'
const Marquee = MarqueeLib.default || MarqueeLib

const LatestNews = () => {
    return (
        <div className='flex flex-wrap items-center gap-3 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary p-2 shrink-0 text-sm font-semibold'>Latest</p>
            <div className='flex-1 min-w-0'>
                <Marquee pauseOnHover={true} speed={50}>
                    <p className='font-semibold mr-10'>🔴 Bangladesh cricket team clinches historic Asia Cup title in dramatic final over — nation celebrates!</p>
                    <p className='font-semibold mr-10'>🔴 Government announces 15% hike in IT sector salaries to retain tech talent in Bangladesh.</p>
                    <p className='font-semibold mr-10'>🔴 Dhaka receives heaviest monsoon rainfall in 10 years; flood alert issued in low-lying areas.</p>
                    <p className='font-semibold mr-10'>🔴 Global AI summit concludes with landmark agreement on ethical use of artificial intelligence.</p>
                    <p className='font-semibold mr-10'>🔴 Bangladesh stock market hits all-time high as foreign investment surges in Q3 2025.</p>
                </Marquee>
            </div>
        </div>
    )
}

export default LatestNews