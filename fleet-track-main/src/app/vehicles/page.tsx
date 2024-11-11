"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Button from "@/components/Button/Button";
import Link from "next/link";
import API from "@/database/apiList";

interface Column {
  key: string;
  title: string;
}

const columns: Column[] = [
  { key: "image", title: "Image" },
  { key: "id", title: "ID" },
  { key: "registrationNumber", title: "Registration Number" },
  { key: "type", title: "Type" },
  { key: "mark", title: "Mark" },
  { key: "typeOfFuel", title: "Fuel Type" },
  { key: "engineDisplacement", title: "Engine Displacement" },
  { key: "vinNumber", title: "VIN" },
  { key: "model", title: "Model" },
  { key: "manufactureYear", title: "Year" },
  { key: "manufactureCountry", title: "Country" }
];

const TableHeader = ({ columns }: { columns: Column[] }) => (
  <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
    <tr>
      {columns.map((column) => (
        <th key={column.key} className="py-4 px-4 text-left font-semibold">{column.title}</th>
      ))}
    </tr>
  </thead>
);

interface Vehicle {
  _id: string;
  registrationNumber: string;
  type: string;
  mark: string;
  typeOfFuel: string;
  engineDisplacement: number;
  vinNumber: string;
  model: string;
  manufactureYear: number;
  manufactureCountry: string;
  imageURL?: string;
  image?: {                  // Thêm thuộc tính image
    data?: {
      $binary?: {
        base64: string;
      };
    };
    contentType?: string;
  };
  stt: number;
}


const TableRow = ({ vehicle }: { vehicle: Vehicle }) => (
  <tr className="border-b border-gray-200 hover:bg-gray-100">
    <td className="py-3 px-4 text-left">
      {vehicle.imageURL ? (
        <img
          src={vehicle.imageURL}
          alt="Vehicle"
          className="w-16 h-16 object-cover rounded"
        />
      ) : (
        "No Image"
      )}
    </td>
    <td className="py-3 px-4 text-left">{vehicle.stt}</td>
    <td className="py-3 px-4 text-left">{vehicle.registrationNumber}</td>
    <td className="py-3 px-4 text-left">{vehicle.type}</td>
    <td className="py-3 px-4 text-left">{vehicle.mark}</td>
    <td className="py-3 px-4 text-left">{vehicle.typeOfFuel}</td>
    <td className="py-3 px-4 text-left">{vehicle.engineDisplacement}</td>
    <td className="py-3 px-4 text-left">{vehicle.vinNumber}</td>
    <td className="py-3 px-4 text-left">{vehicle.model}</td>
    <td className="py-3 px-4 text-left">{vehicle.manufactureYear}</td>
    <td className="py-3 px-4 text-left">{vehicle.manufactureCountry}</td>
  </tr>
);

export default function VehiclePage() {
  const vehicleAPI = API.vehicleList;
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [apiError, setApiError] = useState("");

  const filteredVehicles = vehicles.filter((vehicle) => {
    return (
      (vehicle._id || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.stt ? vehicle.stt.toString() : "").includes(searchTerm) ||
      (vehicle.registrationNumber || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.type || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.mark || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.typeOfFuel || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.engineDisplacement ? vehicle.engineDisplacement.toString() : "").includes(searchTerm) ||
      (vehicle.vinNumber || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.model || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.manufactureYear ? vehicle.manufactureYear.toString() : "").includes(searchTerm) ||
      (vehicle.manufactureCountry || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(vehicleAPI);
        const vehiclesWithImages = response.data.map((vehicle: Vehicle) => {
          const imageURL = API.vehicleImageById(vehicle._id); // Explicitly use localhost:5000 from apiList.ts
          console.log("Image URL:", imageURL); // Debug URL generation
          return { ...vehicle, imageURL };
        });
        setVehicles(vehiclesWithImages);
      } catch (error) {
        if (error instanceof Error) {
          setApiError(error.message);
        } else {
          setApiError("An unknown error occurred");
        }
      }
    };
    fetchVehicles();
  }, []);


  return (
    <div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search vehicles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
        <Link href="/vehicles/add-new-vehicle">
          <Button
            variant="outline"
            color="primary"
            size="md"
            radius="full"
            startContent={<span className="material-symbols-rounded">add</span>}
          >
            Add new
          </Button>
        </Link>
      </div>
      {apiError && <p className="text-red-500">{apiError}</p>}
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
        <table className="w-full">
          <TableHeader columns={columns} />
          <tbody>
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle, index) => (
                <TableRow key={vehicle._id || index} vehicle={vehicle} />
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  No vehicles available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
