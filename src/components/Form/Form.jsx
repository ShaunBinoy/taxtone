import React, { useState } from "react";
import contact from "../../assets/review/contact.png";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = "https://sheetdb.io/api/v1/372vjtk25zdp2"; // Your Google Script URL

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        setFormData({ name: "", phone: "", email: "", course: "" });
      } else {
        alert("Failed to submit the form");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  return (
    <div>
      <h2 className="text-center text-4xl md:text-6xl font-bold animate-fade-in ease-in-out duration-300 md:-mb-16">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:h-screen">
        <div className="hidden md:flex w-1/2 justify-center">
          <div className="w-[350px] md:w-[650px] object-cover">
            <img
              src={contact}
              alt="Contact"
              className="animate-fade-in ease-in-out duration-2000"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-md mx-auto mt-5 p-6  animate-fade-in ease-in-out duration-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 animate-fade-in ease-in-out duration-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-100 rounded-2xl animate-fade-in ease-in-out duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 animate-fade-in ease-in-out duration-300">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="+919874563210"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-gray-100 rounded-2xl animate-fade-in ease-in-out duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 animate-fade-in ease-in-out duration-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="model@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border bg-gray-100 rounded-2xl animate-fade-in ease-in-out duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 animate-fade-in ease-in-out duration-300">
                Select Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border bg-gray-100 rounded-2xl mb-2 animate-fade-in ease-in-out duration-300"
                required
              >
                <option value="">Select a course</option>
                <option value="Accounting Mastery">Accounting Mastery</option>
                <option value="Excel Essentials">Excel Essentials</option>
                <option value="GST Essentials">GST Essentials</option>
                <option value="GST Masterclass">GST Masterclass</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-2xl hover:bg-blue-600 animate-fade-in ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
