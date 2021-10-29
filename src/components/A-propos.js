import React from 'react';
import { useScroll } from './useScroll';
import { motion } from "framer-motion";

import { scrollReveal } from '../animation';

import Quality from './Qualités';

import Portrait from '../Images/photo identité close up-nb.webp';

const Apropos = () => {

    const [element, controls] = useScroll();
    return (
        <motion.div id="Apropos" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <div className="title">
                <hr className="small-line" />
                <h1>A propos</h1>
                <hr className="big-line" />
            </div>

            <div className="presentation">
                <img src={Portrait} alt="Portrait" />
                <div className="blue-square bs">
                    <p>Bonjour et bienvenue sur mon portfolio!</p>

                    <p>Je m'appelle Maëlle Daniel et suis développeuse web junior.</p>

                    <p>Ayant un intérêt certain pour l'UX et l'UI, j'apprécie tout particulièrement le développement front-end. </p>
                </div>
            </div>

            <Quality />
        </motion.div>
    );
};

export default Apropos;