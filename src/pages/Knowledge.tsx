import Navigation from "../components/Navigation";
import Technologies from "../components/Knowledge/Technologies";
import Experiences from "../components/Knowledge/Experiences";
import Miscellaneous from "../components/Knowledge/Miscellaneous";
import Hobbies from "../components/Knowledge/Hobbies";

const Knowledge = () => {
    return (
        <div className="page__knowledge">
            <Navigation />
            <div className="knowledge__content">
                <Technologies />
                <Experiences />
                <Miscellaneous />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledge;