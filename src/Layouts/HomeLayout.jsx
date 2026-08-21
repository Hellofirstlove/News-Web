import React from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router'
import Header from '../Component/Header'
import LatestNews from '../Component/LatestNews'
import Navbar from '../Component/Navbar'
import LeftSide from '../Component/HomeLayout/LeftSide'
import RightSide from '../Component/HomeLayout/RightSide'
import Loading from '../Component/Loading'

const HomeLayout = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            {/* On mobile: single column. On lg: 12-column grid with sidebars */}
            <main className='w-11/12 mx-auto my-3 grid grid-cols-1 lg:grid-cols-12 gap-4'>
                {/* Left sidebar — hidden on mobile, visible on lg */}
                <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-0 lg:h-fit'>
                    <LeftSide></LeftSide>
                </aside>
                {/* Main feed — full width on mobile, 6 cols on lg */}
                <section className="col-span-1 lg:col-span-6">
                    {state === "loading" ? <Loading></Loading> : <Outlet />}
                </section>
                {/* Right sidebar — hidden on mobile, visible on lg */}
                <aside className='hidden lg:block lg:col-span-3 lg:sticky lg:top-0 lg:h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    )
}

export default HomeLayout