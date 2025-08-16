const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
  foodName: String,
  quantity: String,
  location: String,
  expiry: String,
  photo: String, // You can store a URL or filename
  foodType: { type: String, enum: ['Veg', 'Non-Veg'], required: true },
  contact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', DonationSchema);