import { hobbiesData } from "../../data/hobbiesData";

const Hobbies = () => {
    return (
        <div id="hobbies">
            <h3>Intérêts</h3>
            <ul>
                { hobbiesData.map(hobby => {
                    return(
                        <li className="hobby">
                            <i className={ hobby.icon } />
                            <span>{ hobby.name }</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Hobbies;