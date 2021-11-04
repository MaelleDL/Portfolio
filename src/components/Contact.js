import React from 'react';
import { useScroll } from './useScroll';
import { motion } from "framer-motion";

import { scrollReveal } from '../animation';

import Localisation from '../Images/localisation.svg';
import Mail from '../Images/mail.svg';
import GitHub from '../Images/github.svg';
import Linkedin from '../Images/linkedin.svg';

const Contact = () => {

    const [element, controls] = useScroll();
    return (
        <motion.div id="Contact" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <div className="title">
                <hr className="small-line" />
                <h1>Me contacter</h1>
                <hr className="big-line" />
            </div>

            <div className="contacts-div">
                <form id="form">
                    <input type="hidden" className="input" name="contact_number" />
                    <label for="SurName">Votre nom:</label>
                    <input type="text" className="input" name="SurName" id="SurName" />
                    <label for="Name">Votre prénom:</label>
                    <input type="text" className="input" name="Name" id="Name" />
                    <label for="Mail">Votre e-mail:</label>
                    <input type="email" className="input" name="Mail" id="Mail" />
                    <label for="message">Votre message</label>
                    <textarea name="message" id="message" className="textarea" cols="50" rows="5"></textarea>
                    <input type="submit" value="Envoyer" className="button" />
                </form>

                <div className="contact-info">
                    <div className="card c-card-1">
                        <img src={Localisation} alt="Localisation" />
                        <div className="blue-square bs">
                            <h3>Nantes</h3>
                        </div>
                    </div>

                    <div className="card c-card-2">
                        <img src={Mail} alt="Mail" />
                        <a href="mailto:maelledaniel2@gmail.com" className="blue-square bs">
                            <h3>maelledaniel2@gmail.com</h3>
                        </a>
                    </div>

                    <div className="card c-card-1">
                        <img src={GitHub} alt="github" />
                        <a href="https://github.com/MaelleDL" target="_blank" rel="noreferrer" className="blue-square bs">
                            <h3>MaelleDL</h3>
                        </a>
                    </div>

                    <div className="card c-card-2">
                        <img src={Linkedin} alt="Linked in" />
                        <a href="https://www.linkedin.com/in/maelle-daniel/" target="_blank" rel="noreferrer" className="blue-square bs">
                            <h3>maelle daniel</h3>
                        </a>
                    </div>

                </div>

            </div>
        </motion.div>
    );
};

export default Contact;