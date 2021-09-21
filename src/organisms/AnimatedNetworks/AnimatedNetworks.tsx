import SocialNetworkCard from "../../molecules/SocialNetworkCard/SocialNetworkCard"
import Network from "../../types/Network"
import "./AnimatedNetworks.scss"

const AnimatedNetworks:React.FC<{networks:Network[]}> = ({networks}) => (
    <section className="about__socialNetworks">
        { networks.map(network => <SocialNetworkCard key={ network.name } network={network} />)}
    </section>
)

export default AnimatedNetworks