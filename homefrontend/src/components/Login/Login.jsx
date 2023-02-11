import React, { useState, useContext } from 'react'
import './Login.css'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export const Login = () => {
    const [inp, setInp] = useState({});

    const { token, setToken , uname , setUname } = useContext(AuthContext);

    const navigate = useNavigate();
    // this function is handling the input ---->
    const handleinp = (e) => {
        const { name, value } = e.target;
        setInp({
            ...inp,
            [name]: value
        })
    }

    //  <----- ---->

    // this function is for login ---->
    const loginFun = async (e) => {
        e.preventDefault();
        try {
            let req = await fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify(inp),
                headers: { 'Content-Type': 'application/json' }
            })

            let res = await req.json();

            alert(res.status);

            console.log(res);

            if (res.token) {
                setToken(res.token);
                setUname(res.uname)
                navigate('/')
            }



        }
        catch (err) {
            console.log(err);
        }
    }
    //<----- ---->
    return (<>
      <h1>Login here</h1>
        <div id='logindiv'>
            <form id='loginForm' onSubmit={loginFun} >
                <input type="text" name="email" placeholder="Username" onChange={handleinp} required={true} />
                <input type="password" name="password" placeholder="Password" onChange={handleinp} required={true} />
                <input type="submit" id="submitlogin" />
            </form>

        </div>
        <div>If you don't hava an account <Link to="/signup" >Click here</Link> to create a new account.</div>
    </>)
}