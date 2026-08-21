import React from "react";
import { FaNewspaper, FaUsers, FaBullseye, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">

      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-primary mb-3">
          About Dragon News
        </h1>
        <p className="text-accent text-lg leading-relaxed">
          Your trusted source for breaking news, in-depth analysis, and
          real-time updates — delivered with integrity and speed.
        </p>
      </div>

      <div className="divider"></div>

      {/* Our Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-base-content mb-3 flex items-center gap-2">
          <FaNewspaper className="text-primary" /> Our Story
        </h2>
        <p className="text-base-content/70 leading-7">
          Dragon News was founded in 2018 with a single mission — to bring
          honest, fast, and fearless journalism to every corner of the world.
          We started as a small team of five passionate journalists and have
          grown into a full-scale digital media platform serving millions of
          readers across Bangladesh and beyond.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-base-content mb-3 flex items-center gap-2">
          <FaBullseye className="text-primary" /> Mission & Vision
        </h2>
        <ul className="list-disc list-inside text-base-content/70 space-y-2 leading-7">
          <li><span className="font-semibold text-base-content">Mission:</span> Deliver accurate, unbiased reporting that empowers citizens.</li>
          <li><span className="font-semibold text-base-content">Vision:</span> Become the most trusted independent news platform in South Asia by 2030.</li>
          <li><span className="font-semibold text-base-content">Values:</span> Transparency, accountability, inclusivity, and journalistic excellence.</li>
        </ul>
      </section>

      {/* Stats Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Articles Published", value: "50,000+" },
          { label: "Monthly Readers",    value: "2M+" },
          { label: "Journalists",        value: "120+" },
          { label: "Awards Won",         value: "18" },
        ].map((stat) => (
          <div key={stat.label} className="bg-base-200 rounded-xl p-5 text-center shadow-sm">
            <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
            <p className="text-sm text-base-content/60 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Leadership */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-base-content mb-5 flex items-center gap-2">
          <FaUsers className="text-primary" /> Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Rahim Uddin Ahmed", role: "Editor-in-Chief",       img: "https://i.pravatar.cc/150?img=11", bio: "20+ years in print and digital journalism. Former BBC Bangla correspondent." },
            { name: "Nusrat Jahan",      role: "Head of Investigations", img: "https://i.pravatar.cc/150?img=47", bio: "Award-winning investigative reporter with a decade of field experience." },
            { name: "Tanvir Hossain",    role: "Technology & Digital",   img: "https://i.pravatar.cc/150?img=12", bio: "Leads platform engineering and digital strategy for Dragon News." },
          ].map((member) => (
            <div key={member.name} className="bg-base-100 shadow-md rounded-xl p-5 flex flex-col items-center text-center">
              <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-3" />
              <h3 className="font-bold text-base-content">{member.name}</h3>
              <p className="text-primary text-sm font-medium">{member.role}</p>
              <p className="text-base-content/60 text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-bold text-base-content mb-3 flex items-center gap-2">
          <FaAward className="text-primary" /> Recognition & Awards
        </h2>
        <ul className="space-y-2 text-base-content/70">
          <li>🏆 Best Digital News Platform — Bangladesh Media Awards 2023</li>
          <li>🏅 Excellence in Investigative Journalism — South Asia Press Club 2022</li>
          <li>🌐 Top 10 News Portals in Bangladesh — Reuters Institute Report 2021</li>
          <li>📰 Innovation in Digital Storytelling — Asia Pacific Media Alliance 2020</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
