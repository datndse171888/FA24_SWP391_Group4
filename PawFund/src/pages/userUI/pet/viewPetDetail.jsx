import React, { useState } from 'react'

const viewPetDetail = () => {
    const [petInfo, setPetInfo] = useState({
        name: '',
        color: '',
        gender: '',
        age: '',
        weight: '',
        breed: '',
        sterilization: '',
        vaccination: ''
    })

    const handleChangeInfo = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setPetInfo({
            ...petInfo,
            [name]: value
        })
    }

    return (
        <div>

        </div>
    )
}

export default viewPetDetail
