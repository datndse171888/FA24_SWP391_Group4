import { Button, Card } from "react-bootstrap";
import "./card.css";
import { useState } from "react";


const card = ({ cat }) => {
  return (
    <div className="col-3">
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
          <div className="" id="viewDetail">
            <Button variant="primary" className="mx-auto btnViewDetail" href={`/catDetail/${cat.id}`} >View detail</Button>
          </div>
        </Card.Body>
      </Card>
    </div>


  );
};

export default card;
