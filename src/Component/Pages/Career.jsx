import React from "react";
import {
  FaBriefcase,
  FaLaptopCode,
  FaPenNib,
  FaCamera,
  FaChartBar,
  FaCheckCircle,
} from "react-icons/fa";

// List of open job positions at Dragon News
const openPositions = [
  {
    id: 1,
    title: "Senior News Reporter",
    department: "Editorial",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    icon: <FaPenNib className="text-primary text-2xl" />,
    description:
      "Research, write, and publish breaking news and feature articles. Minimum 3 years of journalism experience required.",
  },
  {
    id: 2,
    title: "Full-Stack Web Developer",
    department: "Technology",
    location: "Remote / Dhaka",
    type: "Full-Time",
    icon: <FaLaptopCode className="text-primary text-2xl" />,
    description:
      "Build and maintain our React-based news platform. Proficiency in React, Node.js, and Firebase required.",
  },
  {
    id: 3,
    title: "Photojournalist",
    department: "Media",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    icon: <FaCamera className="text-primary text-2xl" />,
    description:
      "Capture compelling visuals that tell the stories behind the headlines. Portfolio submission required.",
  },
  {
    id: 4,
    title: "Data & Analytics Analyst",
    department: "Business Intelligence",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    icon: <FaChartBar className="text-primary text-2xl" />,
    description:
      "Analyze reader engagement data to drive content strategy. Expertise in SQL and Google Analytics preferred.",
  },
];

// Employee benefits list
const benefits = [
  "Competitive salary & performance bonuses",
  "Flexible work-from-home options",
  "Health & dental insurance",
  "Paid leave: 20 days annually",
  "Learning & development budget",
  "Free press credentials & media access",
  "Collaborative, inclusive team culture",
];

const Career = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">

      {/* ── Page Header ── */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-primary mb-3">
          Careers at Dragon News
        </h1>
        <p className="text-accent text-lg leading-relaxed max-w-2xl mx-auto">
          Join a team that believes truth matters. We are always looking for
          talented, driven individuals who want to shape the future of
          digital journalism in Bangladesh.
        </p>
      </div>

      <div className="divider"></div>

      {/* ── Why Join Us ── */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-700 mb-5 flex items-center gap-2">
          <FaBriefcase className="text-primary" /> Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-600">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section>
        <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center gap-2">
          <FaBriefcase className="text-primary" /> Open Positions
        </h2>
        <div className="space-y-5">
          {openPositions.map((job) => (
            <div
              key={job.id}
              className="bg-base-100 shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start"
            >
              {/* Icon */}
              <div className="bg-base-200 p-4 rounded-full shrink-0">
                {job.icon}
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    {job.title}
                  </h3>
                  <span className="badge badge-primary badge-outline text-xs">
                    {job.type}
                  </span>
                </div>

                <div className="flex gap-4 text-sm text-gray-500 mb-3">
                  <span>🏢 {job.department}</span>
                  <span>📍 {job.location}</span>
                </div>

                <p className="text-gray-600 text-sm leading-6">
                  {job.description}
                </p>
              </div>

              {/* Apply Button */}
              <div className="shrink-0">
                <button className="btn btn-primary btn-sm px-6">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact HR ── */}
      <div className="mt-12 bg-base-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Don't see a role that fits?
        </h3>
        <p className="text-gray-500 mb-4">
          We're always open to hearing from passionate journalists and
          technologists. Send your CV to our HR team.
        </p>
        <a
          href="mailto:careers@dragonnews.com.bd"
          className="btn btn-outline btn-primary"
        >
          careers@dragonnews.com.bd
        </a>
      </div>
    </div>
  );
};

export default Career;
