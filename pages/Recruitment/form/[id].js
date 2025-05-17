import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function CandidateForm() {
  const router = useRouter();
  const { id } = router.query;

  const [candidate, setCandidate] = useState(null);
  const [formData, setFormData] = useState({
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    highest_qualification: "",
    aadhar_card: null,
    pan_card: null,
    aadhar_number: "",
    pan_number: "",
    education_certificates: null,
    resume: null,
    experience_certificate: null,
    profile_photo: null,
    account_holder_name: "",
    bank_name: "",
    branch_name: "",
    account_number: "",
    ifsc_code: "",
    contact_no: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/recruitment/getCandidateById?id=${id}`)
        .then((res) => {
          setCandidate(res.data);
          setFormData((prev) => ({
            ...prev,
            contact_no: res.data.contact_no || "",
          }));
        })
        .catch((err) => console.error("Error fetching candidate:", err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
  
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    data.append("candidate_id", id);
    data.append("name", candidate.name);
    data.append("email", candidate.email);

    try {
      const response = await axios.post("/api/recruitment/submitForm", data);
      alert(`Form submitted successfully.\nGenerated Password: ${response.data.password}`);
      router.push('/Recruitment/form/docs_submitted');
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl p-10 transition-all duration-500">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">Candidate Submission Form</h2>

        <form onSubmit={handleSubmit} className="grid gap-8" encType="multipart/form-data">
          {/* Candidate ID */}
          <div className="grid grid-cols-1 gap-4">
            <label className="block font-medium text-gray-700">Candidate ID</label>
            <input
              type="text"
              value={candidate?.candidate_id || "Loading..."}
              readOnly
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 shadow-sm"
            />
          </div>

          {/* Candidate Name */}
          <div className="grid grid-cols-1 gap-4">
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={candidate?.name || "Loading..."}
              readOnly
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 shadow-sm"
            />
          </div>

          {/* Candidate Email */}
          <div className="grid grid-cols-1 gap-4">
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={candidate?.email || "Loading..."}
              readOnly
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-100 text-gray-600 shadow-sm"
            />
          </div>

          {/* Contact No. */}
          <div className="grid grid-cols-1 gap-4">
            <label className="block font-medium text-gray-700">Contact No.</label>
            <input
              type="text"
              name="contact_no"
              value={formData.contact_no}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
          </div>

          {/* Address Section */}
          <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Address Line 1</label>
              <input
                type="text"
                name="address_line_1"
                value={formData.address_line_1}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="address_line_2"
                value={formData.address_line_2}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          {/* PAN and Aadhar Cards */}
          <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Documents</h3>
          <div className="grid grid-row-2 grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Aadhar Card</label>
              <input
                type="file"
                name="aadhar_card"
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
              <label className="block font-medium text-gray-700">PAN Card</label>
              <input
                type="file"
                name="pan_card"
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
              
            </div>

            <div className="grid grid-cols-1 gap-4">  
              <br/>        
              <input
                type="text"
                name="aadhar_number"
                 placeholder="Aadhar Card Number"
                value={formData.aadhar_number}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            <br/>              
              <input
                type="text"
                name="pan_number"
                placeholder="PAN Card NUmber"
                value={formData.pan_number}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          {/* Educational Certificates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Educational Certificates</label>
              <input
                type="file"
                name="education_certificates"
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Highest Qualification</label>
              <input
                type="text"
                name="highest_qualification"
                value={formData.highest_qualification}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          {/* Resume */}
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Profile Photo</label>
              <input
                type="file"
                name="profile_photo"
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          {/* Experience Certificate */}
          <div className="grid grid-cols-1 gap-4">
            <label className="block font-medium text-gray-700">Experience Certificate</label>
            <input
              type="file"
              name="experience_certificate"
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
          </div>

          {/* Bank Details */}
          <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Bank Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Account Holder Name</label>
              <input
                type="text"
                name="account_holder_name"
                value={formData.account_holder_name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Bank Name</label>
              <input
                type="text"
                name="bank_name"
                value={formData.bank_name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Branch Name</label>
              <input
                type="text"
                name="branch_name"
                value={formData.branch_name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <label className="block font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                name="account_number"
                value={formData.account_number}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <label className="block font-medium text-gray-700">IFSC Code</label>
            <input
              type="text"
              name="ifsc_code"
              value={formData.ifsc_code}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm"
            />
          </div>

          <button type="submit" className="w-full px-5 py-3 bg-indigo-600 text-white rounded-xl mt-6 shadow-md hover:bg-indigo-700">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}
