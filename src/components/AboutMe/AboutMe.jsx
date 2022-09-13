import React from "react";
import ImageBg from "../../assets/images/green_aboutme_background.png";
import Bitmoji from "../../assets/images/bitmoji.png";
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div>
                <h2>À propos de moi👋</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corporis voluptatibus enim? Praesentium cumque quisquam eligendi iste
                    alias consequuntur repellat, totam eius distinctio. Voluptatibus est quas recusandae maiores, possimus sint.
                </p>
            </div>
            <div>
                <img src={ImageBg} alt="" />
                <img src={Bitmoji} alt="" />
            </div>
        </div>
    );
};

export default AboutMe;
