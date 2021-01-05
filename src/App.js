import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Payment from './components/payment'
import Login from './components/Login'
import {auth} from './components/firebase'
import {useStateValue} from './components/StateProvider'

function App() {

  const [{basket, user}, dispatch] = useStateValue();
  
  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    console.log("The user is ::", authUser)

    if(authUser){
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else{
      dispatch({
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

        <Route path="/payment">
          <Header />
            <Payment />
          
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
