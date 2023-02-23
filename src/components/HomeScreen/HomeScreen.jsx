import React from 'react';
import Slider from '../HeroSection/Slider';
import Nav from '../Navbar/Nav';
import './HomeScreen.scss';

const HomeScreen = () => {
    return (
        <div>
            <Nav />
            <Slider />
        </div>
    );
};

export default HomeScreen;