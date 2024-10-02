import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const VehicleList = () => {
  const API = "https://66fd4c81c3a184a84d19e7ca.mockapi.io/api/Xe";
  const [vehicles, setVehicles] = useState([]); // State để chứa dữ liệu phương tiện
  const [apiError, setApiError] = useState(""); // State để theo dõi lỗi từ API

  // Fetch dữ liệu từ API khi component được load
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(API);
        setVehicles(response.data); // Cập nhật dữ liệu phương tiện
      } catch (error) {
        setApiError("Không thể kết nối đến server");
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div>
      <h1>Danh sách phương tiện</h1>

      {apiError && <p>{apiError}</p>} {/* Hiển thị lỗi nếu có */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Mẫu xe</th>
            <th>Số Khung</th>
            <th>Hãng sản xuất</th>
            <th>Biển số</th>
            <th>Loại nhiên liệu</th>
            <th>Năm sản xuất</th>
            <th>Loại xe</th>
            <th>Màu sắc</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td>{vehicle.id}</td> {/* Sử dụng `id` nếu API trả về `id` */}
              <td>{vehicle.vehicleModule}</td>
              <td>{vehicle.SoKhungModule}</td>
              <td>{vehicle.HangModule}</td>
              <td>{vehicle.BienSoModule}</td>
              <td>{vehicle.NhienLoaiModule}</td>
              <td>{vehicle.NamModule}</td>
              <td>{vehicle.LoaiXeModule}</td>
              <td>{vehicle.MauSacModule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
