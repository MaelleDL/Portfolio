import React, { useState } from 'react';
import { motion } from "framer-motion";
import { frontFlip, backFlip } from '../animation';

import Dots from '../Images/DotsThreeOutline.svg';
import HTML from '../Images/html.png';
import CSS from '../Images/CSS.png';
import JS from '../Images/JS.png';
import MUI from '../Images/mui.png';
import REACT from '../Images/react.png';
import SASS from '../Images/sass.png';
import STYLED from '../Images/styled.jpg';
import EXPRESS from '../Images/express.png';
import MONGO from '../Images/MongoDB.png';
import REDUX from '../Images/redux.png';

const WorkCard = ({ work }) => {
    const getTech = (tech) => {
        switch (tech) {
            case "vanJs":
                return JS;
            case "HTML":
                return HTML;
            case "CSS":
                return CSS
            case "React":
                return REACT;
            case "Sass":
                return SASS;
            case "Styled":
                return STYLED;
            case "Mui":
                return MUI;
            case "MongoDB":
                return MONGO;
            case "redux":
                return REDUX;
            case "Express":
                return EXPRESS;
            default:
                return tech;
        }
    }
    const [turn, setTurn] = useState(true);
    const handleReadMore=()=>{ setTurn(!turn)}
    return (
        <div className="work">
            <img src={process.env.PUBLIC_URL+`/images/${work.image}`} alt={work.image} className="coverim"/>
            <div className="bs">
                <div className="blue-square ">
                    <h1>{work.title}</h1>
                    <p className="madeIn">{work.status}</p>
                    <motion.div className="front" variants={turn===false? frontFlip :backFlip} initial="hidden" animate="show">
                        <div className="tech">
                            <h2>Environnement technique:</h2>
                            <div className="technos">
                                {work.tech.map((data) => (<img key={data.name} src={getTech(data.name)} alt={data.name}></img>))}
                            </div>
                        </div>
                        <img src={Dots} alt="séparation-dots" className="dots" />
                        <div className="obj-ctxt">
                            <div className="group">
                                <h2>Contexte:</h2>
                                {work.contexteLink ?
                                <p>{work.contexte[0]} <a href={work.contexteLink} target="_blank" rel="noreferrer" > {work.contexte[1]}</a> {work.contexte[2]}</p>
                                :
                                <p>{work.contexte}</p>
                                }
                            </div>
                            <div className="group">
                                <h2>Objectifs:</h2>
                                <p>{work.objectifs}</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="back" variants={turn === false ? backFlip : frontFlip} initial="hidden" animate="show">
                        <div className="Desc">
                            <h2>Descriptif:</h2>
                            <p>{work.description[0]}</p>
                            <p>{work.description[1]}</p>
                        </div>
                        <div className="group">
                            <h2>Accent.s de travail: </h2>
                            <p>{work.accent}</p>
                        </div>
                    </motion.div>
                    <p onClick={handleReadMore} className="ReadMore">LIRE PLUS ➔</p>
                </div>
                <div className="btSpot">
                    <a href={work.SiteURL} target="_blank" rel="noreferrer"className="button" > Visiter</a>
                    <a href={work.GitHubUrl} target="_blank" rel="noreferrer" className="button"> GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;