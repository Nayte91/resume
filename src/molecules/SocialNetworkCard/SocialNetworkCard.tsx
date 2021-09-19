import Network from "../../types/Network"
import "./SocialNetworkCard.scss"

const SocialNetworkCard: React.FC<{network:Network}> = ({ network }) => (
    <div className="socialNetwork__card">
        <a href={ network.url } key={ network.name }>
            <h4>{ network.name }</h4>
            <i className={ network.icon } />
        </a>
    </div>
)

export default SocialNetworkCard