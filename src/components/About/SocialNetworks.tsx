import networksData from "../../data/networksData"

const SocialNetworks = () => { return (
    <section className="about__socialNetworks">
        { networksData.map( network => { return (
            <div className="socialNetwork__card">
                <a href={ network.url } key={ network.name }>
                    <h4>{ network.name }</h4>
                    <i className={ network.icon } />
                </a>
            </div>
        )})}
    </section>
)}

export default SocialNetworks