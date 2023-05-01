import React from 'react';
import Navbar from './Navbar';
import '../App.css';

const Videos = () => {
    return (
        <div>
        <div className='page'>
            <div>
                <Navbar/>
                <h1 className='text'>
                    HERE ARE SOME Videos OF DUCKS
                </h1>
                <iframe width="420" height="315" title='video1'
                    src="https://www.youtube.com/embed/MtN1YnoL46Q">
                </iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qa1FSN5ejEo" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
        </div>
        <div className="weirdtext">
                <p className='text'>
                Ducks can fly
                </p>
                </div>
                <img src="images/dance-dancing-duck.gif" alt="gif" width = "250"></img>
        </div>
    );
}

export default Videos;