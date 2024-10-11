import {
  Button,
  Card
} from "react-bootstrap";
import "./card.css";

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
    // <div className="card">
    //   <Card
    //     Card
    //     style={{
    //       width: "18rem",
    //       paddingBlock: "20px",
    //       marginBlock: "20px",
    //       marginLeft: "20px",
    //     }}
    //   >
    //     <Img variant="top" src="holder.js/100px180?text=Image cap" rounded/>
    //     <CardBody>
    //       <CardTitle>Name: {cat.name}</CardTitle>
    //     </CardBody>
    //     <ListGroup className="list-group-flush" style={{ width: "293px" }}>
    //       <ListGroup.Item style={{ width: "17.5rem" }} className="listg">
    //         Age: {cat.age}
    //       </ListGroup.Item>
    //       <ListGroup.Item style={{ width: "17.5rem" }} className="listg">
    //         Gender: {cat.gender}
    //       </ListGroup.Item>
    //       <ListGroup.Item style={{ width: "17.5rem" }} className="listg">
    //         Breed: {cat.breed}
    //       </ListGroup.Item>
    //     </ListGroup>
    //     <CardBody>
    //       <Button className="btn" variant="primary">
    //         View more
    //       </Button>
    //     </CardBody>
    //   </Card>
    // </div>
  );
};

export default card;
