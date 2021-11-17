import React from 'react';
import { useScroll } from './useScroll';
import { motion } from "framer-motion";

import { scrollReveal } from '../animation';

import Quality from './Qualités';

import Portrait from '../Images/photo identité close up-nb.webp';
import CV from '../Images/Maelle-Daniel-CV.pdf';

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
                <div className="blabla">
                    <div className="blue-square bs">
                        <p>Bienvenue sur mon portfolio!</p>

                        <p>Je m'appelle Maëlle Daniel et suis développeuse web junior.</p>

                        <p>Issue d'un <span>parcours non-linéaire</span> et varié (Bac S, Licence d'Histoire, Cursus chant lyrique en conservatoire ), j'ai enfin trouvé ma voie dans le développement web. Ayant de l'appétence autant pour la <span>logique et la résolution de problème</span> que pour <span>l'UX et l'UI</span>, je m'épanouie pleinement dans ce domaine.</p>

                        <p>En mars 2020, après huit mois de formation chez Simplon.co, j'ai obtenu mon <span>titre professionnel de développeuse web et web mobile</span>. Je continue à <span>me former en autodidacte</span> (edx, openclassroom, codecademy... ) et à m'exercer (projets personnels, codingame) afin de m'améliorer un peu plus chaque jour.</p>
                    </div>
                    <a href={CV} target="_blank" rel="noreferrer" className="button">Mon CV</a>
                </div>
            </div>

            <Quality />
        </motion.div>
    );
};

export default Apropos;