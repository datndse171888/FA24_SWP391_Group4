import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
import "./viewCatList.css";
import Header from "../../../component/header/header";
import CatCard from "../../../component/card/card";

const viewPetList = () => {
  const [catInfo, setCatInfo] = useState({
    name: "",
    age: "",
    gender: "",
    breed: "",
  });

  const catjson = {
    name: "Tom",
    age: "2",
    gender: "male",
    breed: "Persian",
  };

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
      <div className="search-pet text-center content">
        <h1 className="title">TÌM THÚ CƯNG</h1>
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

        <>
          <CatCard cat={catjson} />
        </>
      </div>
    </div>
  );
};
export default viewPetList;
