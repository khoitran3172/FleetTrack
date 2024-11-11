const API = {
  vehicleList: "http://localhost:5000/api/vehicles",
  vehicleById: (id: string) => `http://localhost:5000/api/vehicles/${id}`,
  vehicleImageById: (id: string) => `http://localhost:5000/api/vehicles/${id}/image`,
};

export default API;
