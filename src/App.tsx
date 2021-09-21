import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./04-pages/HomePage";
import KnowledgePage from "./04-pages/KnowledgePage";
import PortfolioPage from "./04-pages/PortfolioPage";
import AboutPage from "./04-pages/AboutPage";
import NotFoundPage from "./04-pages/NotFoundPage";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/competences" component={KnowledgePage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default App;