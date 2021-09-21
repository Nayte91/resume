import "./_TechnologySelector.scss"

interface TechnologySelectorProps {
    technologies: string[];
    selectedTechnology: string;
    setTechnology: (e:string) => void;
}

const TechnologySelector:React.FC<TechnologySelectorProps> = ({technologies, selectedTechnology, setTechnology}) => (
    <nav className="portfolio__selector">
        {technologies.map(technology => (
            <div 
                className={`selector__button${technology === selectedTechnology ? " selector__button--selected": "" }`} 
                key={technology} 
                onClick={e => setTechnology(e.currentTarget.innerText)}
            >
                <button>{technology}</button>
            </div>
        ))}
    </nav>
)

export default TechnologySelector