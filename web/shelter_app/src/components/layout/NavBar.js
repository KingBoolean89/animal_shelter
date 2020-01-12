import React, { Fragment } from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

const NavBar = () => {
    return (
    <Fragment>
        <BrowserRouter>
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/dogs/">Dogs</Link></li>
                        <li><Link to="/cats/">Cats</Link></li>
                        <li><Link to="/reptiles/">Reptiles</Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/dogs/">Dogs</Link></li>
                <li><Link to="/cats/">Cats</Link></li>
                <li><Link to="/reptiles/">Reptiles</Link></li>
            </ul>
         </BrowserRouter>
    </Fragment>
    )
}

export default NavBar
