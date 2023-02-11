import React, { useState } from 'react'
import './Signup.css'
import { useNavigate, Link } from 'react-router-dom'

export const Signup = () => {
    const [inp, setInp] = useState({});

    const navigate = useNavigate();


    //   this function is handling the input ---->
    const handleinp = (e) => {
        const { name, value } = e.target;
        setInp({
            ...inp,
            [name]: value
        })
    }
    //<----- ---->



    //   function for signup ---->
    const SignupFun = async (e) => {
        e.preventDefault();
        try {
            let req = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                body: JSON.stringify(inp),
                headers: { 'Content-Type': 'application/json' }
            })

            let res = await req.json();

            // finding error and alert it

            if (res.status == 'failed') {
                let massages = res.massage.trim().split(' ')
                let err;
                for (let i of massages) {
                    if (i == 'E11000') {
                        err = 'Email is already exist'
                        break;
                    }
                    else if (i == 'password:') {
                        err = 'Password must not smaller than 8 characters'
                        break;
                    }
                }
                alert(err)
            } else {
                alert(res.status)
                navigate('/login')
            }

            //<----- ---->

        }
        catch (err) {
            console.log(err);
        }
    }
    //<----- ---->
    return (<>
        <h1>Signup Form</h1>
        <div id="signupdiv"  >
            <form id='signupForm' onSubmit={SignupFun} >
                <input type="text" name="firstname" placeholder='First Name' required={true} onChange={handleinp} />
                <input type="text" name="lastname" placeholder='Last Name' required={true} onChange={handleinp} />
                <input type="email" name="email" placeholder='Email' required={true} onChange={handleinp} />
                <input type="password" name="password" placeholder='Password' required={true} onChange={handleinp} />
                <input type="submit" id='submitSignup' />
            </form>
        </div>
        <div>If you already have an account <Link to="/login" >Click here</Link> to login.</div>
    </>)
}
