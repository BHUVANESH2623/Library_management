import React, { useState } from "react";
import axios from "axios";
import "./addbooks.scss";
export const Addbooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    subject: "",
    publish: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://library-management-1-e7u3.onrender.com/book",
        formData,
        { withCredentials: true }
      );
      console.log(response.data);
      console.log("added successfully");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      {/* <label htmlFor="id" className="block mb-2">
        Id
      </label>
      <input
        type="number"
        name="id"
        placeholder="Id"
        value={formData.id}
        onChange={handleChange}
        className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
      /> */}
      <label htmlFor="title" className="block mb-2">
        Title
      </label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <label htmlFor="author" className="block mb-2">
        Author
      </label>
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <label htmlFor="subject" className="block mb-2">
        Subject
      </label>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <label htmlFor="publish" className="block mb-2">
        Publish date
      </label>
      <input
        type="date"
        name="publish"
        placeholder="Publish Date"
        value={formData.publish}
        onChange={handleChange}
        className="block w-full border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Book
      </button>
    </form>
  );
};
