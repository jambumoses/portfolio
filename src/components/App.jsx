import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Contact from "./pages/Contact.jsx";
import Work from "./pages/Work.jsx";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/app.css";
import "./css/fonts.css";

function App(){
    return (
        <>
        <Router>
            <Header/>
                <Switch>
                    <Route path="/" exact component={Work} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            <Footer/>
        </Router>
        </>
    );
}

export default App;