import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';
 

function Logo() {
    return (
        <div className='na4 mt0'>
            <Tilt className="Tilt br2 ml5 shadow-2" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3">
                <img style={{paddingTop: '8px'}}src={brain} alt='logo'/>
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;
