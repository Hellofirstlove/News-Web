import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="p-4">
            <h2 className="font-bold mb-5">Find Us on</h2>
            <div className="">
                <div className="join join-vertical w-full">
                    <button className="btn bg-base-100 join-item">
                        <FaFacebook size={24}></FaFacebook> Facebook
                    </button>
                    <button className="btn bg-base-100 join-item">
                        <FaTwitter size={24}></FaTwitter> Twitter
                    </button>
                    <button className="btn bg-base-100 join-item">
                        <FaInstagram size={24}></FaInstagram> Instagram
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindUs