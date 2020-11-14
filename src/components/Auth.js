import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth';

export const Auth = () => {

    const dispatch = useDispatch()

    const [user, setuser] = useState('')


    const loguearse = (e) => {
        e.preventDefault()
     

        dispatch( login(user.email, user.password))
        console.log(user)
    }

    const handleInputChange = ({target}) => {
        setuser({
            ...user,
            [target.name]: target.value 
        })

        console.log(user)
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loguearse}>
               <label>Email</label><br />
               <input type="email" onChange={handleInputChange} name="email" /><br />
               <label>Password</label><br />
               <input type="password" onChange={handleInputChange}  name="password" /><br />
               <button>Ingresar</button>
            </form> 
        </div>
    )
}
