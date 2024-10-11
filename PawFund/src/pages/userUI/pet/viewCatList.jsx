import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
import "./viewCatList.css";
import Header from "../../../component/header/header";
import CatCard from "../../../component/card/card";
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
    img: "",
    name: "",
    age: "",
    gender: "",
    breed: "",
  });

  const catjson = [{
    img: img1,
    name: "Toto",
    age: "2",
    gender: "Female",
    breed: "Persian",
  },
  {
    img: img2,
    name: "Jame",
    age: "5",
    gender: "Male",
    breed: "Scotland",
  },
  {
    img: img3,
    name: "Tina",
    age: "6",
    gender: "Female",
    breed: "Maine Coon",
  },
  {
    img: img4,
    name: "Tom",
    age: "5",
    gender: "Male",
    breed: "Scottish Fold",
  },
  {
    img: img5,
    name: "Teo",
    age: "2",
    gender: "Female",
    breed: "Sphynx",
  },
  {
    img: img6,
    name: "Hiragana",
    age: "1",
    gender: "Male",
    breed: "Munchkin ",
  },
  {
    img: img7,
    name: "Kanji",
    age: "3",
    gender: "Female",
    breed: "Somali",
  },
  {
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

  const [filters, setFilters] = useState({
    gender: "Tất cả",
    age: "Tất cả",
    color: "Tất cả",
    spayed: "Tất cả",
    name: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    console.log("Search filters:", filters);
  };

  return (
    <div>
      <Header />
      <div className="search-pet">
        <h1 className="title text-center">TÌM THÚ CƯNG</h1>
        <div className="filters grid-container">
          <div>
            <label className="block">Giới tính</label>
            <select
              name="gender"
              className="custom-select"
              value={filters.gender}
              onChange={handleFilterChange}
            >
              <option>Tất cả</option>
            </select>
          </div>
          <div>
            <label className="block">Độ tuổi</label>
            <select
              name="age"
              className="custom-select"
              value={filters.age}
              onChange={handleFilterChange}
            >
              <option>Tất cả</option>
            </select>
          </div>
          <div>
            <label className="block">Màu</label>
            <select
              name="color"
              className="custom-select"
              value={filters.color}
              onChange={handleFilterChange}
            >
              <option>Tất cả</option>
            </select>
          </div>
          <div>
            <label className="block">Triệt sản</label>
            <select
              name="spayed"
              className="custom-select"
              value={filters.spayed}
              onChange={handleFilterChange}
            >
              <option>Tất cả</option>
            </select>
          </div>
          <div>
            <label className="block">Tên</label>
            <input
              type="text"
              name="name"
              className="custom-select"
              value={filters.name}
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex-end">
            <button
              className="custom-button custom-button-pink"
              onClick={handleSearch}
            >
              TÌM KIẾM
            </button>
          </div>
        </div>
      </div>
      <div className="row loadcat">
        {/* <CatCard cat={catjson[0]} /> */}

        {catjson.map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>
    </div>

  );
};
export default viewPetList;
