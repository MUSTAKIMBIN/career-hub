import { NavLink } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>
            <h2 className="text-4xl">Opps!!!</h2>
            <NavLink to='/'><button>go Back</button></NavLink>
        </div>
    );
};

export default ErrorElement;