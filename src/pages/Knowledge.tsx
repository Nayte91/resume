import React from 'react';
import Navigation from "../components/Navigation";
import Technologies from "../components/Knowledge/Technologies";
import Experiences from "../components/Knowledge/Experiences";
import Skills from "../components/Knowledge/Skills";
import Hobbies from "../components/Knowledge/Hobbies";

const Knowledge = () => {
    return (
        <div id="knowledge">
            <Navigation />
            <div id="knowledge-content">
                <Technologies />
                <Experiences />
                <Skills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledge;