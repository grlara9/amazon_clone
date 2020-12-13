import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      
        <Route exact path="/">
            <Header />
            <Home />
        </Route>
        <Route path="/checkout">
        <Header />  
            <Checkout />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
