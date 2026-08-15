import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Component/Header'
import LatestNews from '../Component/LatestNews'
import Navbar from '../Component/Navbar'
import LeftSide from '../Component/HomeLayout/LeftSide'

const HomeLayout = () => {
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
        <main>
            <aside>
                <LeftSide></LeftSide>
            </aside>
            <section className="main">
                <Outlet />
            </section>
            <section className="right-nav"></section>
        </main>
    </div>
  )
}

export default HomeLayout