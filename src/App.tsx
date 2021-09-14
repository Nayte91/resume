import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Knowledge from "./pages/Knowledge";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/competences" component={Knowledge} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/about" component={About} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;