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
    return (
        <div className="work">
                <img src={process.env.PUBLIC_URL+`/images/${work.image}`} alt={work.image} className="coverim"/>
                <div className="bs">
                <div className="blue-square ">
                    <h1>{work.title}</h1>
                    <img src={Dots} alt="séparation-dots" className="dots"/>
                    <div className="tech">
                        <h2>Environnement technique:</h2>
                        <div className="technos">
                            {work.tech.map((data) => (<img key={data.name} src={getTech(data.name)} alt={data.name}></img>))}
                        </div>
                    </div>
                    <img src={Dots} alt="séparation-dots" className="dots"/>
                    <p>{work.description}</p>
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