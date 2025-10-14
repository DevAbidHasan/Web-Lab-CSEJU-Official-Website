import React from 'react';
import Hero from '../pages/Header/Hero';
import Contact from '../components/Contact';
import Faculty from '../components/Faculty';
import About from '../components/About';
import Research from '../components/Research';
import FAQ from '../components/FAQ';

const HomeLayout = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Faculty></Faculty>
            <Research></Research>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;