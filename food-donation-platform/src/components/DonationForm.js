import React, { useState } from 'react';
import { motion } from 'framer-motion';

function DonationForm() {
  const [form, setForm] = useState({
    foodName: '',
    quantity: '',
    location: '',
    expiry: '',
    foodType: '', // Veg or Non-Veg
    contact: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate foodType
    if (!form.foodType) {
      setError('Please select Veg or Non-Veg.');
      return;
    }

    // Validate contact number (must be exactly 10 digits)
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(form.contact)) {
      setError('Please enter a valid 10-digit contact number.');
      return;
    }

    fetch(`${process.env.REACT_APP_API_URL}/donations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          alert('Donation submitted!');
          // Optionally clear the form or redirect
        }
      })
      .catch(err => setError('Something went wrong!'));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">Donate Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Food Name</label>
          <input type="text" className="form-control" name="foodName" value={form.foodName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Quantity</label>
          <input type="text" className="form-control" name="quantity" value={form.quantity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Pickup Location</label>
          <input type="text" className="form-control" name="location" value={form.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Expiry Time</label>
          <input type="datetime-local" className="form-control" name="expiry" value={form.expiry} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Food Type</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="foodType"
                id="veg"
                value="Veg"
                checked={form.foodType === 'Veg'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="veg">Veg</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="foodType"
                id="nonveg"
                value="Non-Veg"
                checked={form.foodType === 'Non-Veg'}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="nonveg">Non-Veg</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Contact Number</label>
          <div className="input-group">
            <span className="input-group-text">+91</span>
            <input
              type="tel"
              className="form-control"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              minLength={10}
              required
              placeholder="Enter 10-digit number"
            />
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <motion.button
          type="submit"
          className="btn btn-yellow btn-lg mt-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Donation
        </motion.button>
      </form>
    </div>
  );
}

export default DonationForm;
