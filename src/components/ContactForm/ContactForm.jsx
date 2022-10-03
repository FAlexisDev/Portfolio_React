import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

const regex = new Map([
    [
        "email",
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    ["name", /^\D+$/],
    ["lastName", /^\D+$/],
    ["message", /^(.*|[\n\s]){0,900}$/],
]);

const ContactForm = () => {
    const [emailResult, setEmailResult] = useState("");
    const name = useRef(null);
    const lastName = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const formValidation = (e) => {
        let regexInfo = regex.get(e.target.name);
        if (regexInfo.test(e.target.value)) {
            e.target.style.borderBottom = "1px solid black";
        } else {
            e.target.style.borderBottom = "2px solid red";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            regex.get("name").test(name.current.value) &&
            regex.get("lastName").test(lastName.current.value) &&
            regex.get("email").test(email.current.value) &&
            regex.get("message").test(message.current.value)
        ) {
            emailjs.sendForm("service_lubmr95", "template_vhnae0h", e.target, "RlSeTyNWZzZ20yKIM").then(
                (result) => {
                    setEmailResult("✅ Message bien envoyé!");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

            e.target.reset();
        } else {
            setEmailResult("⛔ Merci de bien vouloir vérifier les champs");
        }
    };

    return (
        <div className="contact">
            <h2 className="contact__title">Contact ✉️</h2>
            <form onSubmit={(e) => handleSubmit(e)} method="POST" className="contact__form">
                <div className="contact__form--name">
                    <input type="text" onChange={formValidation} placeholder="Votre Prénom" className="name" name="name" id="name" ref={name} />
                    <input
                        type="text"
                        onChange={(e) => formValidation(e)}
                        placeholder="Votre Nom"
                        name="lastName"
                        id="lastName"
                        className="name"
                        ref={lastName}
                    />
                </div>

                <input type="email" className="contact__form--email" onChange={(e) => formValidation(e)} placeholder="Votre Mail" name="email" ref={email} />

                <textarea
                    type="textArea"
                    onChange={(e) => formValidation(e)}
                    placeholder="Votre Message"
                    name="message"
                    rows="15"
                    maxLength="900"
                    ref={message}
                />
                {emailResult !== "" ? <p className="email__result">{emailResult}</p> : ""}
                <input type="submit" name="submit" id="submit" value="📩 Envoyer" />
            </form>
        </div>
    );
};

export default ContactForm;
