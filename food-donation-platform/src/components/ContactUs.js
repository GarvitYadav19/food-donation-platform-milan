import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          alert('Error: ' + data.error);
        } else {
          alert('Thank you for contacting us!');
          setForm({ name: '', email: '', message: '' });
        }
      })
      .catch(() => alert('Something went wrong!'));
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4 fw-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "0 auto" }}>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Name</label>
          <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Email</label>
          <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold" style={{ color: "#222" }}>Message</label>
          <textarea className="form-control" name="message" value={form.message} onChange={handleChange} rows={5} required />
        </div>
        <motion.button
          type="submit"
          className="btn btn-yellow btn-lg mt-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}

export default ContactUs;
