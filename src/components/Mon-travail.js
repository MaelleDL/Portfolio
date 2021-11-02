import React, { useEffect, useState } from 'react';
import { useScroll } from './useScroll';
import { motion } from "framer-motion";

import { scrollReveal } from '../animation';

import Works from '../Works.json';

const Work = () => {

    const [screenSize, setScreenSize] = useState(window.screen.width);
    

    useEffect(() => {
        setScreenSize(window.screen.width);
    }, [window.screen.width]);

    const [element, controls] = useScroll();
    return (
        <div id="Travail" variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <div className="title">
                <hr className="big-line" />
                <h1>Mon travail</h1>
                <hr className="small-line" />
            </div>
            <div className="Works">
                {Works.map((work)=><div className="work" key={work.id}>
                    <img src={process.env.PUBLIC_URL+`/images/${work.image}`} alt={work.image} />
                    <div className="bs">
                        <div className="blue-square ">
                            <h2>{work.title}</h2>
                            <p>{work.description}</p>
                        </div>
                        <div className="btSpot">
                            <a href={work.SiteURL} target="_blank" className="button" > Visiter</a>
                            <a href={work.GitHubUrl} target="_blank" className="button"> GitHub</a>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Work;