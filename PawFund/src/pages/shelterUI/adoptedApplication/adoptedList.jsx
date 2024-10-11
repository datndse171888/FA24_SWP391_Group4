import React from 'react'

const adoptedList = () => {
const [adoptedInfo, setAdoptedInfo] = useState({
    
});

    return (
        <div>
            <Tab.Container id="list-group-tabs-example">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#link1">
                                Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2">
                                Link 2
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
                            <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default adoptedList
