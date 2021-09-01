import React from 'react';

import M1 from '../Images/M 1.svg';
import A1 from '../Images/A 1.svg';
import D1 from '../Images/D 1.svg';
import Dots from '../Images/DotsThreeOutline.svg';

const Quality = () => {
    return (
        <div id="qualite">
            <div className="quali">
                <img src={M1} alt="M-illustration" width="30%" />
                <p>DYNAMISME</p>
                <img src={Dots} alt="dots" />
                <p>Enthousiaste</p>
                <p>Esprit d’équipe</p>
            </div>
            <div className="quali">
                <img src={A1} alt="A-illustration" width="30%" />
                <p>CREATIVITE</p>
                <img src={Dots} alt="dots" />
                <p>Intérêt pour l'UX/UI</p>
                <p>Inventive</p>
            </div>
            <div className="quali">
                <img src={D1} alt="D-illustration" width="30%" />
                <p>MOTIVATION</p>
                <img src={Dots} alt="dots" />
                <p>Soif d'apprendre</p>
                <p>Autodidacte</p>
            </div>
        </div>
    );
};

export default Quality;


