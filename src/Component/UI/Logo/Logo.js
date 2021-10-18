import React from 'react';
import mainLogo from '../../../Assets/Logo.png';
import './Logo.css';


function Logo() {
    return (
        <div className='Logo'>
            <img src={mainLogo} alt='Logo' />
        </div>
    )
}

export default Logo;