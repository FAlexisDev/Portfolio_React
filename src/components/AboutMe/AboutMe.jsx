import React from "react";
import Typewriter from "typewriter-effect";
import ImageBg from "../../assets/images/bitmojii.png";
import "./AboutMe.scss";

const AboutMe = () => {
    return (
        <div className="AboutMe">
            <div className="AboutMe__text">
                <h2 className="AboutMe__text--title">
                    Moi c'est,
                    <Typewriter
                        options={{
                            cursorClassName: "cursor",
                            autoStart: true,
                            loop: false,
                            delay: 70,
                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(500).start().typeString("Alexis Fontaine !");
                        }}
                    />
                </h2>
                <h2 className="AboutMe__text--title">
                    Je recherche un poste de développeur
                    <Typewriter
                        options={{
                            strings: ["Frontend", "en React !"],
                            loop: false,
                            autoStart: false,
                            delay: 70,
                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1800).start().typeString("Frontend").pauseFor(500).deleteAll().typeString("ReactJS!");
                        }}
                    />
                </h2>
                <p className="AboutMe__text--content">
                    Développeur web junior curieux et impliqué. Je recherche un poste de développeur frontend React. Étant une personne rigoureuse, j'apprécie
                    le travail bien fait.
                </p>
            </div>
            <div className="AboutMe__image">
                <img src={ImageBg} alt="" className="AboutMe__image--bg" />
            </div>
        </div>
    );
};

export default AboutMe;
