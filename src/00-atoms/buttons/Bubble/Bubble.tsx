import Network from "../../../05-types/Network";
import "./_Bubble.scss";

const Bubble: React.FC<{network:Network}> = ({ network }) => (
    <li key={ network.name } className="network__bubble">
        <a href={ network.url } target="_blank" rel="noopener noreferrer">
            <i className={ network.icon } />
        </a>
    </li>
)

export default Bubble