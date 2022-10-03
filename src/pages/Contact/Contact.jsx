import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import GoogleCard from "../../components/GoogleCard/GoogleCard";
import Headers from "../../components/Headers/Headers";
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="bg">
            <Headers />
            <div className="contact__display">
                <ContactForm className="contact__form" />
                <GoogleCard className="contact__display--card" id="googlecard" />
            </div>
            <div className="contact__display--whitebg"></div>
        </div>
    );
};

export default Contact;
