import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function Header(props) {
    return (

        <header className="header bg-dark text-center">
            <a href="https://github.com/drock4440"> <h1 className="text-white"> Dalton Rothrock </h1></a>
        </header>

    );
}

export default Header;