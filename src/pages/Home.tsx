import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div id="home">
            <Navigation />
            <div id="home-content">
                <div className="content">
                    <h1>Julien Robic</h1>
                    <h2>Développeur web</h2>
                    <div id="pdf">
                        <a href="./media/CV.pdf">Téléchargez mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;