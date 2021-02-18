import style from './index.module.css'
import {routes} from "../../config/routes";
import {Link, useRouteMatch} from "react-router-dom";
import {useLocation} from "react-router";

const Header = (props) => {
    const location = useLocation()
    console.log(location)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            routes.map((route) => {
                                return (
                                    <li key={route.path} className={`nav-item ${location.pathname === route.path ? style.active : ''}`}>
                                        <Link className="nav-link" aria-current="page" to={route.path}>{route.title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header