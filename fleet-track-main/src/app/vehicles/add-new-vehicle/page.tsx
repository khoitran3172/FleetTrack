"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
import API from "@/database/apiList";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";

export default function AddNewVehicle() {
  const vehicleAPI = API.vehicleList;
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  // State cho các trường dữ liệu
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [type, setType] = useState("");
  const [mark, setMark] = useState("");
  const [engineNumber, setEngineNumber] = useState("");
  const [typeOfFuel, setTypeOfFuel] = useState("");
  const [engineDisplacement, setEngineDisplacement] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [model, setModel] = useState("");
  const [chassisNumber, setChassisNumber] = useState("");
  const [manufactureYear, setManufactureYear] = useState("");
  const [manufactureCountry, setManufactureCountry] = useState("");
  const [inspectionReportNumber, setInspectionReportNumber] = useState("");
  const [dateOfIssue, setDateOfIssue] = useState("");
  const [validUntil, setValidUntil] = useState("");
  const [file, setFile] = useState<File | null>(null); // State cho file ảnh

  const [showModal, setShowModal] = useState(false);

  const handleConfirmCancel = () => {
    setShowModal(false);
    router.push("/vehicles");
  };

  // Xử lý khi chọn file
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Xử lý gửi form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("registrationNumber", registrationNumber);
    formData.append("type", type);
    formData.append("mark", mark);
    formData.append("engineNumber", engineNumber);
    formData.append("typeOfFuel", typeOfFuel);
    formData.append("engineDisplacement", engineDisplacement);
    formData.append("vinNumber", vinNumber);
    formData.append("model", model);
    formData.append("chassisNumber", chassisNumber);
    formData.append("manufactureYear", manufactureYear);
    formData.append("manufactureCountry", manufactureCountry);
    formData.append("inspectionReportNumber", inspectionReportNumber);
    formData.append("dateOfIssue", dateOfIssue);
    formData.append("validUntil", validUntil);

    // Thêm file vào FormData nếu có
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await fetch(vehicleAPI, {
        method: "POST",
        body: formData, // Sử dụng FormData để gửi cả dữ liệu và ảnh
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      alert("Vehicle added successfully");
      router.push("/vehicles"); // Điều hướng sau khi thêm thành công
    } catch (error) {
      if (error instanceof Error) {
        setApiError(error.message);
      } else {
        setApiError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col gap-9">
      {apiError && <p className="text-red-500">{apiError}</p>}
      <form onSubmit={handleSubmit} className="inline-flex w-full flex-col gap-6">
        <div className="grid grid-cols-2 gap-5">
          <div className="inline-flex flex-col gap-6">
            <InputField
              label="Registration number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />

            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="p-2 border rounded-md">
              <option value="">Select type</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
            </select>

            <label>Mark</label>
            <select value={mark} onChange={(e) => setMark(e.target.value)} className="p-2 border rounded-md">
              <option value="">Select mark</option>
              <option value="honda">Honda</option>
              <option value="mazda">Mazda</option>
            </select>

            <InputField
              label="Engine number"
              value={engineNumber}
              onChange={(e) => setEngineNumber(e.target.value)}
            />

            <label>Type of Fuel</label>
            <select value={typeOfFuel} onChange={(e) => setTypeOfFuel(e.target.value)} className="p-2 border rounded-md">
              <option value="">Select fuel type</option>
              <option value="xăng">Xăng</option>
              <option value="dầu">Dầu</option>
              <option value="điện">Điện</option>
              <option value="hybird">Hybrid</option>
            </select>

            <InputField
              label="Engine displacement"
              value={engineDisplacement}
              onChange={(e) => setEngineDisplacement(e.target.value)}
            />
          </div>

          <div className="inline-flex flex-col gap-6">
            <InputField
              label="VIN number"
              value={vinNumber}
              onChange={(e) => setVinNumber(e.target.value)}
            />

            <label>Model</label>
            <select value={model} onChange={(e) => setModel(e.target.value)} className="p-2 border rounded-md">
              <option value="">Select model</option>
              <option value="camry">Camry</option>
              <option value="cx">CX</option>
              <option value="class-c">Class C</option>
              <option value="e">E</option>
            </select>

            <InputField
              label="Chassis number"
              value={chassisNumber}
              onChange={(e) => setChassisNumber(e.target.value)}
            />

            <label>Manufacture Year</label>
            <select value={manufactureYear} onChange={(e) => setManufactureYear(e.target.value)} className="p-2 border rounded-md">
              <option value="">Select year</option>
              {/* Tạo danh sách năm từ 1990 đến 2023 */}
              {[...Array(34)].map((_, i) => (
                <option key={1990 + i} value={1990 + i}>
                  {1990 + i}
                </option>
              ))}
            </select>

            <label>Manufacture Country</label>
            <select value={manufactureCountry} onChange={(e) => setManufactureCountry(e.target.value)} className="p-2 border rounded-md">
              <option value="">Select country</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
              <option value="Germany">Germany</option>
            </select>
          </div>
        </div>

        {/* Input cho ảnh */}
        <div className="inline-flex flex-col gap-6">
          <label>Upload Vehicle Image</label>
          <input type="file" onChange={handleFileChange} />
        </div>
      </form>
      <div className="inline-flex w-full flex-row justify-between">
        <Button
          variant="outline"
          size="md"
          radius="full"
          onClick={() => setShowModal(true)}
        >
          Cancel
        </Button>
        <Button
          variant="solid"
          color="primary"
          size="md"
          radius="full"
          onClick={handleSubmit}
        >
          Add vehicle
        </Button>

        {showModal && (
          <ConfirmationModal
            title="Are you sure?"
            message="Do you really want to cancel the adding process? This action cannot be undone."
            onConfirm={handleConfirmCancel}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}
