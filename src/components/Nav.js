import React, { useState } from 'react';
import {FiMenu, FiX} from 'react-icons/fi';

import Logo from '../Images/LOGON 1.svg';

const Nav = () => {
    const [open, setOpen]=useState(false);
    return (
        <nav>
            <a href="#Accueil" onClick={()=>setOpen(false)}>
                <img src={Logo} alt="Logo"
                />
            </a>
            <div className="nav-icon" onClick={()=>setOpen(!open)}>{open?<FiX/>:<FiMenu/>}</div>
            <div className={open? 'menu active' : 'menu'}>
                    <a className="sub" href="#Apropos" onClick={()=>setOpen(false)}>
                    <h2>A propos</h2>
                    <div className="line"></div>
                    </a>
                    <a className="sub" href="#Travail" onClick={()=>setOpen(false)}>
                        <h2>Mon travail</h2>
                    </a>
                    <a className="sub" href="#Contact" onClick={()=>setOpen(false)}>
                        <h2>Me contacter</h2>
                    </a>
            </div>
        </nav>
    );
};

export default Nav;