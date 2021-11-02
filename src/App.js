import Home from "./pages/Home";
import Alquran from "./pages/Alquran";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/alquran">
                        <Alquran />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
