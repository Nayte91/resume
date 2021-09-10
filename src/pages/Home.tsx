import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="page__home">
            <Navigation />
            <main className="home__content">
                <article className="home__splash">
                    <h1>Développeur web</h1>
                    <h2>spécialiste Symfony</h2>
                    <div className="button__pdf">
                        <a href="./media/CV Julien Robic.pdf">Téléchargez mon CV</a>
                    </div>
                </article>
            </main>
        </div>
    );
};

export default Home;