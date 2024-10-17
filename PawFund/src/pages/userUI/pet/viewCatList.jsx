import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
import "./viewCatList.css";
import Header from "../../../component/header/header.jsx";
import Footer from "./../../../component/footer/footer";
import Pagination from "../../../component/pagination/pagination.jsx";
import CatCard from "../../../component/card/card.jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../Image/cat/cat01.jpg";
import img2 from "../../../Image/cat/cat02.jpg";
import img3 from "../../../Image/cat/cat03.jpg";
import img4 from "../../../Image/cat/cat04.jpg";
import img5 from "../../../Image/cat/cat05.jpg";
import img6 from "../../../Image/cat/cat06.jpg";
import img7 from "../../../Image/cat/cat07.jpg";
import img8 from "../../../Image/cat/cat08.jpg";

const viewPetList = () => {
  const [catInfo, setCatInfo] = useState({
    id: "",
    img: "",
    name: "",
    age: "",
    gender: "",
    breed: "",
  });

  const catjson = [
    {
      id: 1,
      img: img1,
      name: "Toto",
      age: "2",
      gender: "Female",
      breed: "Persian",
    },
    {
      id: 2,
      img: img2,
      name: "Jame",
      age: "5",
      gender: "Male",
      breed: "Scotland",
    },
    {
      id: 3,
      img: img3,
      name: "Tina",
      age: "6",
      gender: "Female",
      breed: "Maine Coon",
    },
    {
      id: 4,
      img: img4,
      name: "Tom",
      age: "5",
      gender: "Male",
      breed: "Scottish Fold",
    },
    {
      id: 5,
      img: img5,
      name: "Teo",
      age: "2",
      gender: "Female",
      breed: "Sphynx",
    },
    {
      id: 6,
      img: img6,
      name: "Hiragana",
      age: "1",
      gender: "Male",
      breed: "Munchkin ",
    },
    {
      id: 7,
      img: img7,
      name: "Kanji",
      age: "3",
      gender: "Female",
      breed: "Somali",
    },
    {
      id: 8,
      img: img8,
      name: "Katakana",
      age: "4",
      gender: "Male",
      breed: "Exotic",
    },
  ];

  const handleChangeInfo = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setCatInfo({
      ...catInfo,
      [name]: value,
    });
  };

  const genderOption = () => [
    { value: "Female" },
    { value: "Male" },
    { value: "All" },
  ];

  const ageOption = () => [
    { value: "All" },
    { value: "Young" },
    { value: "Adulthood" },
    { value: "Old" },
  ];

  const colorOption = () => [
    { value: "All" },
    { value: "Black" },
    { value: "White" },
    { value: "Yellow" },
    { value: "Tabby" },
    { value: "Gray" },
    { value: "Siamese" },
    { value: "Brown" },
  ];

  const sterilizationOption = () => [
    { value: "Invalid" },
    { value: "Already" },
    { value: "Not yet" },
  ];

  const [filters, setFilters] = useState({
    gender: genderOption()[2].value,
    age: ageOption()[0].value,
    color: colorOption()[0].value,
    sterilization: sterilizationOption()[0].value,
    name: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search filters:", filters);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = catjson.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Header />
      <div className="search-pet">
        <div className="section-heading text-center mt-5">
          <h2 id="heading">TÌM THÚ CƯNG</h2>
        </div>
        <div className="row pt-4">
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            <label className="block">Giới tính</label>
            <select
              name="gender"
              className="custom-select"
              value={filters.gender}
              onChange={handleFilterChange}
            >
              {genderOption().map((option, index) => (
                <option key={index} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            <label className="block">Độ tuổi</label>
            <select
              name="age"
              className="custom-select"
              value={filters.age}
              onChange={handleFilterChange}
            >
              {ageOption().map((option, index) => (
                <option key={index} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            <label className="block">Màu</label>
            <select
              name="color"
              className="custom-select"
              value={filters.color}
              onChange={handleFilterChange}
            >
              {colorOption().map((option, index) => (
                <option key={index} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            <label className="block">Triệt sản</label>
            <select
              name="sterilization"
              className="custom-select"
              value={filters.spayed}
              onChange={handleFilterChange}
            >
              {sterilizationOption().map((option, index) => (
                <option key={index} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>

          <div className="col-6 col-sm-4 col-md-4 col-lg-4">
            <label className="block">Tên</label>
            <input
              type="text"
              name="name"
              className="custom-select"
              value={filters.name}
              onChange={handleFilterChange}
            />
          </div>

          <div className="col-6 col-sm-4 col-md-4 col-lg-4 justify-content-center align-self-center text-center">
            <div className="form-group mb-0 pt-lg-2">
              <button
                className="custom-button custom-button-pink"
                onClick={handleSearch}
              >
                TÌM KIẾM
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row loadcat">
        {/* <CatCard cat={catjson[0]} /> */}

        {currentPosts.map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>

      <Pagination
        totalPosts={catjson.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};
export default viewPetList;
