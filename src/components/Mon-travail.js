import React from 'react';
import { useScroll } from './useScroll';
// import { motion } from "framer-motion";
import WorkCard from './work-card';

import { scrollReveal } from '../animation';

import Works from '../Works.json';

const Work = () => {
    
    const [element, controls] = useScroll();
    return (
        <div id="Travail" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <div className="title">
                <hr className="big-line" />
                <h1>Mon travail</h1>
                <hr className="small-line" />
            </div>
            <div className="Works">
                {Works.map((work) => <WorkCard key={work.id} work={work}/>)}
            </div>
        </div>
    );
};

export default Work;