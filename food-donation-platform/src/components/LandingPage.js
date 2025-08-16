import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuotesSection from './QuotesSection';
import { FaLeaf, FaHandsHelping, FaSmile, FaRegEdit, FaSearchLocation, FaHandHoldingHeart } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaLeaf size={36} color="#ffe600" />,
    title: "Reduce Food Waste",
    desc: "Help the environment by ensuring surplus food is shared, not wasted."
  },
  {
    icon: <FaHandsHelping size={36} color="#ffe600" />,
    title: "Support Your Community",
    desc: "Make a real difference in the lives of people around you."
  },
  {
    icon: <FaSmile size={36} color="#ffe600" />,
    title: "Spread Happiness",
    desc: "Experience the joy of giving and bring smiles to those in need."
  }
];

const steps = [
  {
    icon: <FaRegEdit size={36} color="#ffe600" />,
    title: "Post a Donation",
    desc: "Fill out a simple form to share details about your available food."
  },
  {
    icon: <FaSearchLocation size={36} color="#ffe600" />,
    title: "Browse Donations",
    desc: "See what food is available in your area and filter by your needs."
  },
  {
    icon: <FaHandHoldingHeart size={36} color="#ffe600" />,
    title: "Claim & Collect",
    desc: "Claim a donation and arrange pickup with the donor."
  }
];

function WhyDonateSection() {
  return (
    <section className="py-5" style={{ background: "#fffde7" }}>
      <div className="container">
        <h2 className="mb-5 text-center" style={{ fontWeight: 700 }}>
          Why <span style={{ color: "#ffe600" }}>Donate?</span>
        </h2>
        <div className="row justify-content-center">
          {reasons.map((reason, idx) => (
            <motion.div
              className="col-md-4 mb-4"
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="card h-100 shadow-sm border-0 text-center" style={{ borderRadius: 20 }}>
                <div className="card-body">
                  <div className="mb-3">{reason.icon}</div>
                  <h5 className="card-title mb-3" style={{ fontWeight: 600 }}>{reason.title}</h5>
                  <p className="card-text">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-5" style={{ background: "#fffde7" }}>
      <div className="container">
        <h2 className="mb-5 text-center" style={{ fontWeight: 700 }}>
          How <span style={{ color: "#ffe600" }}>It Works</span>
        </h2>
        <div className="row justify-content-center">
          {steps.map((step, idx) => (
            <motion.div
              className="col-md-4 mb-4"
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="card h-100 shadow-sm border-0 text-center" style={{ borderRadius: 20 }}>
                <div className="card-body">
                  <div className="mb-3">{step.icon}</div>
                  <h5 className="card-title mb-3" style={{ fontWeight: 600 }}>{step.title}</h5>
                  <p className="card-text">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center min-vh-100"
        style={{
          backgroundImage: "url('/image/backgroundImgHeroSection.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="display-3 fw-bold mb-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.7)"
              }}
            >
              Welcome to <span style={{ color: "#ffe600" }}>Milan</span>
            </h1>
            <p
              className="lead mb-4 fw-bold"
              style={{
                fontSize: "2rem",
                color: "#fff",
                textShadow: "0 2px 8px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)"
              }}
            >
              Share a Meal, Spread a Smile.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-yellow btn-lg"
                style={{ backgroundColor: '#ffe600', color: '#222', border: 'none' }}
                onClick={() => navigate('/donate')}
              >
                Donate Food Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-yellow btn-lg"
                style={{ backgroundColor: '#ffe600', color: '#222', border: 'none' }}
                onClick={() => navigate('/browse')}
              >
                Available Food Donations
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorksSection />

      {/* Quotes Section */}
      <QuotesSection />

      {/* Why Donate */}
      <WhyDonateSection />
    </div>
  );
}

export default LandingPage;
