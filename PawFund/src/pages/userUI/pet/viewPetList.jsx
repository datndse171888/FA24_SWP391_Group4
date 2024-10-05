import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import React, { useState } from 'react'
import './viewPetList.css'
import CatCard from '../../../component/card/card'

const viewPetList = () => {

    const [catInfo, setCatInfo] = useState({
        name: '',
        age: '',
        gender: '',
        breed: ''
    })

    const catjson = {
        name: 'Tom',
        age: '2',
        gender: 'male',
        breed: 'Persian'
    }


    const handleChangeInfo = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setCatInfo({
            ...catInfo,
            [name]: value
        })
    }
    return (
        <>
            <CatCard cat={catjson} />
        </>
    )
}
export default viewPetList