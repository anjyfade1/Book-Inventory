import React from 'react';
import './HomeDetails.css';
import Logo from '../../../Component/UI/Logo/Logo';

const HomeDetails = () => {
    return (
        <div className='HomeDetails'>
            
            <div className='HomeDetails-nav'>
                    <div className='HomeDetails-Logo'>
                        <Logo/>
                    </div>
                    <div className='HomeDetails-Explore'>
                        <h3>register now</h3>
                        <h2>Explore Now</h2>
                    </div>
                </div>
                <div className='Heading'>
                    <h3>your first digital library</h3>
                    <h1>The easiest way to <span> meet the book </span> </h1>
                </div>
        </div>
    )
}

export default HomeDetails;