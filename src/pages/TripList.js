import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const TripList = () => {
  const API = "https://66850e3656e7503d1ae22ace.mockapi.io/api/demo/TRIP";
  const [trips, setTrips] = useState([]); // State để chứa dữ liệu chuyến đi
  const [apiError, setApiError] = useState(""); // State để theo dõi lỗi từ API

  // Fetch dữ liệu từ API khi component được load
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get(API);
        setTrips(response.data); // Cập nhật dữ liệu chuyến đi
      } catch (error) {
        setApiError("Không thể kết nối đến server");
      }
    };
    fetchTrips();
  }, []);

  return (
    <div>
      <h1>Danh sách chuyến đi</h1>

      {apiError && <p>{apiError}</p>} {/* Hiển thị lỗi nếu có */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Phương tiện</th>
            <th>Tài xế</th>
            <th>Điểm xuất phát</th>
            <th>Điểm đến</th>
            <th>Thời gian khởi hành</th>
            <th>Thời gian kết thúc</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, index) => (
            <tr key={index}>
              <td>{trip.id}</td>
              <td>{trip.vehicle}</td>
              <td>{trip.Taixe}</td>
              <td>{trip.Diemxuatphat}</td>
              <td>{trip.Diemden}</td>
              <td>{trip.Tgiankhoihanh}</td>
              <td>{trip.Tgianketthuc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;
