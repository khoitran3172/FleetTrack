import React, { useState } from 'react';
import './AddTrip.css';

const AddTrip = () => {
    // State để lưu trữ dữ liệu từ form
    const [tripData, setTripData] = useState({
        vehicle: '',
        driver: '',
        startLocation: '',
        endLocation: '',
        startTime: '',
        endTime: ''
    });

    // Hàm xử lý khi người dùng nhập thông tin
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTripData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Hàm xử lý khi người dùng submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic thêm chuyến đi tại đây (ví dụ: gửi dữ liệu lên server)
        console.log(tripData);
        alert('Chuyến đi đã được thêm thành công!');
    };

    return (
        <div className="add-trip-container">
            <h2>Thêm chuyến đi mới</h2>
            <form onSubmit={handleSubmit} className="trip-form">
                <div className="form-group">
                    <label>Phương tiện:</label>
                    <input 
                        type="text" 
                        name="vehicle" 
                        value={tripData.vehicle} 
                        onChange={handleChange} 
                        placeholder="Nhập tên phương tiện" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Tài xế:</label>
                    <input 
                        type="text" 
                        name="driver" 
                        value={tripData.driver} 
                        onChange={handleChange} 
                        placeholder="Nhập tên tài xế" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Điểm xuất phát:</label>
                    <input 
                        type="text" 
                        name="startLocation" 
                        value={tripData.startLocation} 
                        onChange={handleChange} 
                        placeholder="Nhập địa điểm xuất phát" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Điểm đến:</label>
                    <input 
                        type="text" 
                        name="endLocation" 
                        value={tripData.endLocation} 
                        onChange={handleChange} 
                        placeholder="Nhập địa điểm đến" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Thời gian khởi hành:</label>
                    <input 
                        type="datetime-local" 
                        name="startTime" 
                        value={tripData.startTime} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Thời gian dự kiến kết thúc:</label>
                    <input 
                        type="datetime-local" 
                        name="endTime" 
                        value={tripData.endTime} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">Thêm chuyến đi</button>
            </form>
        </div>
    );
};

export default AddTrip;
