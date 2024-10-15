import React from 'react'
import { useState } from 'react';
import { Accordion, Button, Form } from 'react-bootstrap';
import Header from '../../../component/header/header.jsx';
import api from '../../../config/axios.jsx';
import './adoptedList.css';

const adoptedList = () => {

    const [adoptedInfo, setAdoptedInfo] = useState({
        id: '',
        petId: '',
        petName: '',
        adopterId: '',
        adopterName: '',
        adopterPhonenumber: '',
        status: ''
    });

    const handleAdoptedInfo = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        setAdoptedInfo({
            ...adoptedInfo,
            [name]: value,
        });
        console.log(adoptedInfo);
    }

    const list = [
        {
            id: 1,
            name: 'Kitty',
        },
        {
            id: 2,
            name: 'Tommy',
        }
    ]

    return (
        <div className="adopted-list-container">
            <Header />
            <div className="adopted-list-content">
                <Accordion className="m-5 adopted-list-accordion">
                    {list.map((item, index) => (
                        <Accordion.Item key={index} eventKey={index} className="adopted-list-item">
                            <Accordion.Header>{item.name}</Accordion.Header>
                            <Accordion.Body>
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        variant="outline-success"
                                        className='mx-2'
                                        name='status'
                                        value="ACCEPT"
                                        onClick={handleAdoptedInfo}
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        variant="outline-danger"
                                        className='mx-2'
                                        name='status'
                                        value="REJECT"
                                        onClick={handleAdoptedInfo}
                                    >
                                        Reject
                                    </Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}


export default adoptedList
