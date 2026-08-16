import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Component/Header'
import LatestNews from '../Component/LatestNews'
import Navbar from '../Component/Navbar'
import LeftSide from '../Component/HomeLayout/LeftSide'
import RightSide from '../Component/HomeLayout/RightSide'

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
        <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
            <aside className='col-span-3'>
                <LeftSide></LeftSide>
            </aside>
            <section className="main col-span-6">
                <Outlet />
            </section>
            <aside className='col-span-3'>
                <RightSide></RightSide>
            </aside>
        </main>
    </div>
  )
}

export default HomeLayout