import React from 'react';
import Hero from '../pages/Header/Hero';
import Contact from '../components/Contact';
import Faculty from '../components/Faculty';

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <Faculty></Faculty>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;