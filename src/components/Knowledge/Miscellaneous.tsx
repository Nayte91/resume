import { miscellaneousFirst, miscellaneousSecond } from "../../data/miscellaneousData"

const Miscellaneous = () => { return (
    <div id="miscellaneous">
        <h3>Autres compétences</h3>
        <div id="miscellaneous-list">
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