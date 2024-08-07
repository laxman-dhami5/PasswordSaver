import React, { useState } from "react";
import Form from "./Form";
import { Button } from "react-bootstrap";
import Modal from "./Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ title: "", password: "" });
  
  const showModalHandler = (index = null) => {
    if (index !== null) {
      // Set edit mode with existing data
      setEditIndex(index);
      setEditData(formData[index]);
    }
    setShowModal(true);
  };
  
  const hideModalHandler = () => {
    setShowModal(false);
    setEditIndex(null);
    setEditData({ title: "", password: "" });
  };

  const submitHandler = (data) => {
    if (editIndex !== null) {
      // Update existing item
      const updatedData = formData.map((item, index) =>
        index === editIndex ? data : item
      );
      setFormData(updatedData);
      setEditIndex(null);
    } else {
      // Add new item
      const newPasswords = [...formData, data];
      setFormData(newPasswords);
    }
    setShowModal(false);
    console.log(data);
  };

  const onDeleteHandler = (index) => {
    const newData = formData.filter((_, i) => i !== index);
    setFormData(newData);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Password Keeper</h1>
        <h4>Total Passwords: {formData.length}</h4>
        <Button
          className="mt-2"
          type="button"
          variant="primary"
          onClick={() => showModalHandler()}
        >
          Add New Password
        </Button>
        <br />
        <br />
        <label>Search:</label>
        <input type="search" />

        {showModal && (
          <Modal onClose={hideModalHandler}>
            <Form
              submitData={submitHandler}
              onClose={hideModalHandler}
              initialData={editData} // Pass initial data for editing
            />
          </Modal>
        )}
      </div>
      <h2>All Passwords</h2>
      <ul>
        {formData.map((da, index) => (
          <li key={index}> 
            <p>
              Title: {da.title} 
              Password: {da.password}
              <Button
              className="me-2"
                type="button"
                onClick={() => onDeleteHandler(index)}
                variant="danger"
              >
                Delete
              </Button>
              <Button 
                type="button"
                onClick={() => showModalHandler(index)}
                variant="info"
              >
                Edit
              </Button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
