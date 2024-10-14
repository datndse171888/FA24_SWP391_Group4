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
          <div className="infoCat">
            <Card.Text className="infotext">
              Age: {cat.age}
            </Card.Text>
            <Card.Text className="infotext">
              Breed: {cat.breed}
            </Card.Text>
            <Card.Text className="infotext">
              Gender: {cat.gender}
            </Card.Text>
          </div>
          <div className="d-flex align-center">
            <Button variant="primary" className="btnViewDetail" href="catdetail/${cat.id}" >View detail</Button>
          </div>
        </Card.Body>
      </Card>
    </div>


  );
};

export default card;
