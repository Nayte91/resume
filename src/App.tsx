import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";
import KnowledgePage from "./pages/KnowledgePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

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