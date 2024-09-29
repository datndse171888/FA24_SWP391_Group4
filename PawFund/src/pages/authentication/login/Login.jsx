import React from 'react'
import { useState } from 'react'
import api from '../../../config/axios.jsx'
import './Login.css'

const login = () => {
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
        try {
            const formData = new FormData();
            formData.append('gmail', gmail);
            formData.append('password', password);
            const respone = await api.post('', formData).then((res) => {
                console.log(respone);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="input-form">
                <div className="input-field">
                    <input className='input-field_input' type="text" id='gmail' name='gmail' value={account.gmail} onChange={handleAccountChange} required />
                    <label htmlFor='gmail' className='input-field_label'>Username </label>
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

export default login
