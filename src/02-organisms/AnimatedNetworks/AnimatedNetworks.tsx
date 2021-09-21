import SocialNetworkCard from "../../01-molecules/SocialNetworkCard/SocialNetworkCard"
import Network from "../../05-types/Network"
import "./_AnimatedNetworks.scss"

const AnimatedNetworks:React.FC<{networks:Network[]}> = ({networks}) => (
    <section className="about__socialNetworks">
        { networks.map(network => <SocialNetworkCard key={ network.name } network={network} />)}
    </section>
)

export default AnimatedNetworks