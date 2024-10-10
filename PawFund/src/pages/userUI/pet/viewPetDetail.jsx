import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './viewPetDetail.css';

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

    const [register, setRegister] = useState({
        catID: useParams(),
        createDate: new Date(),
        adopterID: localStorage.getItem('userID'),
        status: 'WAITING'
    });

    const { id } = useParams();

    const handleChangeInfo = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setPetInfo({
            ...petInfo,
            [name]: value
        })
    }

    return (
        <div className='body'>
            <Container>
                <Row>
                    <Col className='col1' >
                        <h1>Image</h1>
                        <img src={petInfo.img} alt={petInfo.name} className="img-fluid" />
                    </Col>
                    <Col className='col2'>
                        <ul className="list-group">
                            <li className="list-group-item">Name: {petInfo.name}</li>
                            <li className="list-group-item">Color: {petInfo.color}</li>
                            <li className="list-group-item"> Gender: {petInfo.gender}</li>
                            <li className="list-group-item">Age: {petInfo.age}</li>
                            <li className="list-group-item">Weight: {petInfo.weight}</li>
                            <li className="list-group-item">Breed: {petInfo.breed}</li>
                            <li className="list-group-item">Sterilization: {petInfo.sterilization}</li>
                            <li className="list-group-item">Vaccination: {petInfo.vaccination}</li>
                        </ul>

                    </Col>
                    <div className="input-button">
                        <button className='btn1'>Adopted</button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default viewPetDetail
