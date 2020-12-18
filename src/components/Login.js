import React, {useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import {auth} from './firebase'
import './Login.css'

const Login =()=>{
    const history = useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('')

    const signIn = e =>{
        e.preventDefault()
    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error => console.log(error.message))
    }
    
    return(
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__button">Sign In</button>

                    <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick={register} className="register__button">Create Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login