import React from 'react';
import Navbar from './Navbar';
import '../App.css';

const Pictures = () => {
    return (
        <div>
        <div className='page'>
            <div>
                <Navbar/>
                <h1 className='text'>
                    HERE ARE SOME PICTURES OF DUCKS
                </h1>
                <img src="images/duck1.jpg" alt="Girl in a jacket"></img>
                <img src="images/duck2.jpg" alt="Girl in a jacket"></img>
                <img src="images/duck3.jpg" alt="Girl in a jacket"></img>
            </div>
            
        </div>
        <div className="weirdtext">
                <p className='text'>
                Ducks can fly
                </p>
                </div>
        </div>
    );
}

export default Pictures;