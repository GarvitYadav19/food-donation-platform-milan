import React, { useEffect, useState } from 'react';

function DonationsList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/donations`)
      .then(res => res.json())
      .then(data => setDonations(data))
      .catch(err => console.error('Error fetching donations:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Available Food Donations</h2>
      <div className="row">
        {donations.length === 0 && <p>No donations available.</p>}
        {donations.map((donation, idx) => (
          <div className="col-md-4 mb-4" key={donation._id || idx}>
            <div className="card">
              {/* Remove the photo display block */}
              <div className="card-body">
                <h5 className="card-title">{donation.foodName}</h5>
                <p className="card-text">Quantity: {donation.quantity}</p>
                <p className="card-text">Location: {donation.location}</p>
                <p className="card-text">Expiry: {donation.expiry}</p>
                <p className="card-text">Type: {donation.foodType}</p>
                <p className="card-text">Contact: +91 {donation.contact}</p>
                {/* Add a claim button here if needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonationsList;
