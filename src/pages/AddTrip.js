import React, { useState } from 'react';
import axios from "axios";
import './AddTrip.css';

const AddTrip = () => {
    // State để lưu trữ dữ liệu từ form
    const API = "https://66850e3656e7503d1ae22ace.mockapi.io/api/demo/TRIP";
    const [vehicle, setVehicleModule] = useState("");
    const [Taixe, setDriModule] = useState("");
    const [Diemxuatphat, setXPModule] = useState("");
    const [Diemden, setDDModule] = useState("");
    const [Tgiankhoihanh, setTimekhModule] = useState("");
    const [Tgianketthuc, setTimeKTModule] = useState("");

    const [apiError, setApiError] = useState(""); // Track API errors
  
    const SaveData = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vehicle,Taixe,Diemxuatphat,Diemden,Tgiankhoihanh,Tgianketthuc }),
      
        });
  
        if (response.ok) {
          alert("Thêm Trip thành công");
        } else {
          setApiError("Thêm phương tiện thất bại");
        }
      } catch (error) {
        setApiError("Không thể kết nối đến server");
      }
      // console.log(vehicleModule);
    };

    return (
        <div className="add-trip-container">
            <h2>Thêm chuyến đi mới</h2>
            <form onSubmit={SaveData} className="trip-form">
                <div className="form-group">
                    <label>Phương tiện:</label>
                    <input 
                        type="text" 
                        name="vehicle" 
                        value={vehicle} 
                        onChange={(e) => setVehicleModule(e.target.value)}
                        placeholder="Nhập tên phương tiện" 
                        required  
                    />
                </div>
                <div className="form-group">
                    <label>Tài xế:</label>
                    <input 
                        type="text" 
                        name="driver" 
                        value={Taixe} 
                        onChange={(e) => setDriModule(e.target.value)}
                        placeholder="Nhập tên tài xế" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Điểm xuất phát:</label>
                    <input 
                        type="text" 
                        name="startLocation" 
                        value={Diemxuatphat} 
                        onChange={(e) => setXPModule(e.target.value)}
                        placeholder="Nhập địa điểm xuất phát" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Điểm đến:</label>
                    <input 
                        type="text" 
                        name="endLocation" 
                        value={Diemden} 
                        onChange={(e) => setDDModule(e.target.value)}
                        placeholder="Nhập địa điểm đến" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Thời gian khởi hành:</label>
                    <input 
                        type="datetime-local" 
                        name="startTime" 
                        value={Tgiankhoihanh} 
                        onChange={(e) => setTimekhModule(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Thời gian dự kiến kết thúc:</label>
                    <input 
                        type="datetime-local" 
                        name="endTime" 
                        value={Tgianketthuc} 
                        onChange={(e) => setTimeKTModule(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">Thêm chuyến đi</button>
            </form>
        </div>
    );
};

export default AddTrip;
