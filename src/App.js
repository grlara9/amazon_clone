import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'

function App() {

  useEffect(() => {
  auth.onAuthStateChange((authUser)=>{
    console.log("The user is ::", authUser)

    if(authUser){
      dispatchEvent({
        type: "SET_USER",
        user: authUser,
      });
    } else{
      dispatchEvent({
        type: "SET_USER",
        user: null
      });
    }
  });
}, [])

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
