import React from 'react';
import Navbar from './Navbar';
import '../App.css';

const Home = () => {
    return (
        <div>
        <div className='page'>
            <div>
                <Navbar/>
                <h1 className='text'>
                    Home PAGE
                </h1>
                <p className='text' style={{width:'600px'}}>
                    This website will be about Ducks
                </p>
                <h2 className='text'>
                    Get Started
                </h2>
                <p style={{width:'600px'}}className='text'>
                    Ducks are birds that swim in water
                </p>
                <h2 className='text'>
                    They are know for making a quack noise
                </h2>
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

export default Home;