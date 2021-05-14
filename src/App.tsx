import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/competences" component={Knowledges}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
