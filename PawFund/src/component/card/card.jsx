import { Button, Card } from "react-bootstrap";
import "./card.css";
import { useState } from "react";


const card = ({ cat }) => {
  cat.id = useState(1)
  return (
    <div className="col-2 listCat">
      <Card >
        <Card.Img className='ImgCatList' src={cat.img} />
        <Card.Body>
          <Card.Title className="nameCat">{cat.name}</Card.Title>
          <Card.Text className="infoCat">
            <p className="m-0">Age: {cat.age}</p>
            <p className="m-0">Breed: {cat.breed}</p>
            <p className="m-0">Gender: {cat.gender}</p>
          </Card.Text>
          <Button variant="primary" className="btnViewDetail" href="catdetail/${cat.id}" >View detail</Button>
        </Card.Body>
      </Card>
    </div>


  );
};

export default card;
