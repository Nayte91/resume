import { miscellaneousFirst, miscellaneousSecond } from "../../data/miscellaneousData"

const Miscellaneous = () => { return (
    <div className="knowledge__miscellaneous">
        <h3>Autres compétences</h3>
        <div className="miscellaneous__list">
            <ul>
                { miscellaneousFirst.map(skill => { return (
                    <li key={ skill }>
                        <i className="fas fa-check-square"><span>{ skill }</span></i>
                    </li>
                ) } ) }
            </ul>
            <ul>
                { miscellaneousSecond.map(skill => { return (
                    <li key={ skill }>
                        <i className="fas fa-check-square"><span>{ skill }</span></i>
                    </li>
                ) } ) }
            </ul>
        </div>
    </div>
)}

export default Miscellaneous