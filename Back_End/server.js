const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
connectDB();

// Sử dụng các route API cho phương tiện
app.use('/api/vehicles', vehicleRoutes);

app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
