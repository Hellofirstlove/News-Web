import React, { useEffect, useState } from 'react'
import Header from '../Header'
import RightSide from '../HomeLayout/RightSide';
import NewsDetailsCard from '../NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    }, [data, id]);

    return (
        <div>
            <header className="py-3">
                <Header></Header>
            </header>
            {/* Single column on mobile, 12-col grid on lg with sidebar */}
            <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-6 lg:py-10">
                {/* Main article — full width on mobile, 9 cols on lg */}
                <section className="col-span-1 lg:col-span-9">
                    <h2 className="font-bold mb-5 text-lg sm:text-xl">News Details</h2>
                    {news && news.id && <NewsDetailsCard news={news}></NewsDetailsCard>}
                </section>
                {/* Sidebar — hidden on mobile, visible on lg */}
                <aside className="hidden lg:block lg:col-span-3">
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    )
}

export default NewsDetails



