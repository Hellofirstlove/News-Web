import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="p-4">
            <h2 className="font-bold mb-5">Find Us on</h2>
            <div className="">
                <div className="join join-vertical w-full">
                    <a
                        href="https://www.facebook.com/DragonNewsOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-base-100 join-item"
                    >
                        <FaFacebook size={24} className="text-blue-600" /> Facebook
                    </a>
                    <a
                        href="https://www.twitter.com/DragonNewsLive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-base-100 join-item"
                    >
                        <FaTwitter size={24} className="text-sky-500" /> Twitter
                    </a>
                    <a
                        href="https://www.instagram.com/DragonNewsOfficial"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-base-100 join-item"
                    >
                        <FaInstagram size={24} className="text-pink-500" /> Instagram
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FindUs