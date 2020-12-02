import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
function App() {
  return (
    <div className="App">
      <Router>
            <Header />
        <Switch>
      
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/checkout">
            <Checkout />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
