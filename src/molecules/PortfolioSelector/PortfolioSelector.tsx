import { useState } from "react";

const PortfolioSelector:React.FC = () => {
    const [selectedTechnology, setTechnology] = useState('PHP');
    const technologies = ['PHP', 'Symfony', 'Javascript', 'React'];
    
    return (
        <nav className="portfolio__selector">
            { technologies.map( technology => { return (
                <div 
                    className={`selector__button${technology === selectedTechnology ? " selector__button--selected": "" }`} 
                    key={ technology } 
                    onClick={ e => setTechnology(e.currentTarget.innerText) }
                >
                    <button>{ technology }</button>
                </div>
            )})}
        </nav>
    )
}

export default PortfolioSelector