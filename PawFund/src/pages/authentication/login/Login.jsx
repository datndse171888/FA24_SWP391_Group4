import React from 'react'
import { useState } from 'react'
import api from '../../../config/axios.jsx'
import './Login.css'

const Login = () => {

    const [account, setAccount] = useState({
        gmail: '',
        password: ''
    })

    const handleAccountChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setAccount({
            ...account,
            [name]: value
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const json = {
                "email": account.gmail,
                "password": account.password
            }

            let res = await api.post('api/login', json);
            const data = res?.data;
            if (data && data.token) {
                localStorage.setItem('token', data.token);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="input-form">
                <div className="input-field">
                    <input className='input-field_input' type="text" id='gmail' name='gmail' value={account.gmail} onChange={handleAccountChange} required />
                    <label htmlFor='gmail' className='input-field_label'>Gmail </label>
                </div>
                <div className="input-field">
                    <input className='input-field_input' type="password" id='password' name='password' value={account.password} onChange={handleAccountChange} required />
                    <label className='input-field_label'>Password </label>
                </div>
                <div className="input-button">
                    <button onClick={handleLogin}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login
