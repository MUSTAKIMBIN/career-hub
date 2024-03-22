import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <h1>This is Root</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;