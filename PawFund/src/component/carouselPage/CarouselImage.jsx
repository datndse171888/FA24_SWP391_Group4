import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Image/banner/img1.jpg";
import img2 from "../../Image/banner/img2.jpg";
import img3 from "../../Image/banner/img3.jpg";
import "./Carousel.css";

const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;
