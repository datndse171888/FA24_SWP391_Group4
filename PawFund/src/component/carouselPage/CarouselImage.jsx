import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Image/banner/Pic1.jpg";
import img2 from "../../Image/banner/Pic2.png";
import img3 from "../../Image/banner/Pic3.jpg";
import "./carousel.css";

const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="img" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="img" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;
