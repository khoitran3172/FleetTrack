// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="content">
            <h1>Chào mừng đến với FleetTrack</h1>
            <p>Giải pháp quản lý đội xe toàn diện</p>
            <img src="/img/image4.png" alt="Xe tải" /> 
            <div className="features">
                <h2>Tính năng nổi bật:</h2>
                <ul>
                    <li>Quản lý phương tiện hiệu quả</li>
                    <li>Theo dõi chuyến đi tự động</li>
                    <li>Báo cáo và phân tích dữ liệu</li>
                    <li>Hỗ trợ khách hàng 24/7</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
