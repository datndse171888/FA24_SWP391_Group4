import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './viewCatDetail.css';
import img1 from '../../../Image/cat/cat05.jpg';
import Header from '../../../component/header/header';
import Footer from '../../../component/footer/footer';

const viewPetDetail = () => {
    const [catInfo, setCatInfo] = useState({
        img: '',
        name: '',
        color: '',
        gender: '',
        age: '',
        weight: '',
        breed: '',
        sterilization: '',
        vaccination: ''
    })

    const catjson = [{
        img: img1,
        name: 'Toto',
        color: 'White',
        gender: 'Female',
        age: '2',
        weight: '12kg',
        breed: 'Persian',
        sterilization: 'No',
        vaccination: 'No'
    }]

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
        <div>
            <Header />
            <div>
                <h1 className='titleCatDetail'>Thông tin chi tiết của mèo</h1>
            </div>
            <div className='bodyCatDetail'>
                <Container>
                    <Row>
                        <Col className='col1Detail' >
                            <img src={catInfo.img} alt={catInfo.name} className="img-fluid imgDetail" />
                        </Col>
                        <Col className='col2Detail'>
                            <ul className="list-group infoDetail">
                                <h1> Name: {catInfo.name}</h1>
                                <li className="list-group-item">Color: {catInfo.color}</li>
                                <li className="list-group-item">Gender: {catInfo.gender}</li>
                                <li className="list-group-item">Age: {catInfo.age}</li>
                                <li className="list-group-item">Weight: {catInfo.weight}</li>
                                <li className="list-group-item">Breed: {catInfo.breed}</li>
                                <li className="list-group-item">Sterilization: {catInfo.sterilization}</li>
                                <li className="list-group-item">Vaccination: {catInfo.vaccination}</li>
                            </ul>

                        </Col>
                        <div className="input-button">
                            <button className='btnAdopted'>Adopted</button>
                        </div>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default viewPetDetail
