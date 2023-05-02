import React from 'react';

const Home = () => {
    const buttonRight = {
        position: 'absolute',
        top: '10px',
        right: '10px'
    };

    return (
        <div>
            <button style={buttonRight}> Login/ Sign-Up</button>
            <div>Welcome!!!</div>
        </div>
    );

};

export default Home;