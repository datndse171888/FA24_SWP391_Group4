import React from 'react'

const Register = () => {
    const [register, setRegister] = useState({
        gmail: '',
        password: '',
        roleName: '',
        avatar: '',
        name: '',
        address: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: ''
    })

    const handleRegisterChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setRegister({
            ...register,
            [name]: value
        })
    }
    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const json = {
                "email": register.gmail,
                "password": register.password,
                "roleName": register.roleName,
                "avatar": register.avatar,
                "name": register.name,
                "address": register.address,
                "dateOfBirth": register.dateOfBirth,
            };
            let res = await api.post('register', json);
            if (res.status === 200) {
                console.log('Register success');
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>

        </div>
    )
}

export default Register
