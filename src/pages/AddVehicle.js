// src/pages/AddVehicle.js
import React, { useState } from "react";
import axios from "axios";
import "./Home.css";
const AddVehicle = () => {
  const API = "https://66fd4c81c3a184a84d19e7ca.mockapi.io/api/Xe";
  const [vehicleModule, setVehicleModule] = useState("");
  const [SoKhungModule, setSoKhungModule] = useState("");
  const [HangModule, setHangModule] = useState("");
  const [BienSoModule, setBienSoModule] = useState("");
  const [NhienLoaiModule, setNhienLoaiModule] = useState("");
  const [NamModule, setNamModule] = useState("");
  const [LoaiXeModule, setLoaiXeModule] = useState("");
  const [MauSacModule, setMauSacModule] = useState("");
  const [apiError, setApiError] = useState(""); // Track API errors

  const SaveData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vehicleModule,SoKhungModule,HangModule,BienSoModule,NhienLoaiModule,NamModule,LoaiXeModule,MauSacModule }),
    
      });

      if (response.ok) {
        alert("Thêm phương tiện thành công");
      } else {
        setApiError("Thêm phương tiện thất bại");
      }
    } catch (error) {
      setApiError("Không thể kết nối đến server");
    }
    // console.log(vehicleModule);
  };
  return (
    <div>
      <h1>Thêm phương tiện mới</h1>
      <form onSubmit={SaveData}>
        <div className="form-container">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="vehicle-model">Mẫu xe:</label>
              <input
                type="text"
                id="vehicle-model"
                name="vehicle-model"
                value={vehicleModule}
                onChange={(e) => setVehicleModule(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="chassis-number">Số khung:</label>
              <input 
              type="text" 
              id="chassis-number"
              name="chassis-number" 
              value={SoKhungModule}
              onChange={(e) => setSoKhungModule(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="manufacturer">Hãng sản xuất:</label>
              <input type="text" id="manufacturer" name="manufacturer" 
                              value={HangModule}
                              onChange={(e) => setHangModule(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="license-plate">Biển số:</label>
              <input type="text" id="license-plate" name="license-plate" 
                              value={BienSoModule}
                              onChange={(e) =>setBienSoModule(e.target.value)}
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="fuel-type">Loại nhiên liệu tiêu thụ:</label>
              <input type="text" id="fuel-type" name="fuel-type" 
                                value={NhienLoaiModule}
                                onChange={(e) => setNhienLoaiModule(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="manufacture-year">Năm sản xuất:</label>
              <input
                type="text"
                id="manufacture-year"
                name="manufacture-year"
                value={NamModule}
                onChange={(e) =>setNamModule(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vehicle-type">Loại xe:</label>
              <input type="text" id="vehicle-type" name="vehicle-type" 
                              value={LoaiXeModule}
                              onChange={(e) => setLoaiXeModule(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="color">Màu sắc:</label>
              <input type="text" id="color" name="color" 
                              value={MauSacModule}
                              onChange={(e) => setMauSacModule(e.target.value)}/>
            </div>
          </div>
        </div>
        <button className="button">Lưu</button>
      </form>
    </div>
  );
};

export default AddVehicle;
