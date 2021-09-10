import ProgressBar from "./ProgressBar";
import { frameworks, languages } from "../../data/technologiesData";

const Technologies = () => {
        return (
            <div id="technologies">
                <ProgressBar
                    skills={ languages }
                    title="Langages"
                    divId="languages"
                />
                <ProgressBar
                    skills={ frameworks }
                    title="Frameworks"
                    divId="frameworks"
                />
            </div>
        );
}

export default Technologies;