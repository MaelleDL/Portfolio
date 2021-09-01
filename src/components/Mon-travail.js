import React, { useEffect, useState } from 'react';
import { useScroll } from './useScroll';
import { motion } from "framer-motion";

import { scrollReveal } from '../animation';

import Blog from '../Images/blog.webp';
import Pokedex from '../Images/pokedex.webp';

const Work = () => {

    const [screenSize, setScreenSize] = useState(window.screen.width);

    useEffect(() => {
        setScreenSize(window.screen.width);
    }, [window.screen.width]);

    const [element, controls] = useScroll();
    return (
        <motion.div id="Travail" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <div className="title">
                <hr className="big-line" />
                <h1>Mon travail</h1>
                <hr className="small-line" />
            </div>

            <div className="work">
                <img src={Blog} alt="Blog-illustration" />
                <div className="bs-right">
                    <div className="blue-square ">
                        <h2>Blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita quisquam at distinctio,</p> <p>error nobis quibusdam aliquid laudantium quasi optio non assumenda natus, beatae nemo libero repudiandae quaerat harum sunt!</p>
                    </div>
                    <div className="btSpot">
                        <button className="button"> Visiter</button>
                        <button className="button"> GitHub</button>
                    </div>
                </div>
            </div>
            <div className="work W-left">
                {screenSize < 992 && <img src={Pokedex} alt="Blog-illustration" />}
                <div className="bs-left">
                    <div className="blue-square ">
                        <h2>Pokedex</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita quisquam at distinctio,
                        </p> <p>error nobis quibusdam aliquid laudantium quasi optio non assumenda natus, beatae nemo libero repudiandae quaerat harum sunt!</p>
                    </div>
                    <div className="btSpot">
                        <button className="button"> Visiter</button>
                        <button className="button"> GitHub</button>
                    </div>
                </div>
                {screenSize > 992 && <img src={Pokedex} alt="Blog-illustration" />}
            </div>
        </motion.div>
    );
};

export default Work;