import { Button, Card } from 'react-bootstrap';

const card = ({ cat }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cat.image} />
            <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
                <Card.Text>
                    <p>Age: {cat.age}</p>
                    <p>Breed: {cat.breed}</p>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default card;