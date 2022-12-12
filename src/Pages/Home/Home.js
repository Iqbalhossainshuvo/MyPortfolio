import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import MyProject from './MyProjects/MyProject';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Skill></Skill>
         <MyProject></MyProject>
         <Contact></Contact>
        </div>
    );
};

export default Home;