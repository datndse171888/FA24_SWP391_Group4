import React from 'react'
import { useState } from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';
import Header from '../../../component/header/header.jsx';
import './adoptedList.css';

const adoptedList = () => {

    const [adoptedInfo, setAdoptedInfo] = useState({

    });

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
        <div>
            <Header />
            <Tab.Container id="list-group-tabs-example" className="d-flex">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            {list.map((item, index) => (
                                <ListGroup.Item key={index} action href={`#${item.id}`}>
                                    {item.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                    <Col sm={8} className='border' id='info-content'>
                        <Tab.Content>
                            {list.map((item, index) => (
                                <Tab.Pane key={index} eventKey={`#${item.id}`}>{item.name}</Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default adoptedList
