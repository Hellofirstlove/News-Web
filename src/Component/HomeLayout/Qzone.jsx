import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
import back from "../../assets/bg.png";
const QZone = () => {
    return (
        <div className="p-4">
            <div className="bg-base-200 p-3">
                <h2 className="font-bold mb-5">QZone</h2>
                <div className="space-y-2">
                    <img src={swimmingImage} alt="" />
                    <img src={classImage} alt="" />
                    <img src={playImage} alt="" />
                </div>
            </div>
            <div className="p-4">
                <img src={back} alt="" />
            </div>
        </div>
    );
};

export default QZone;