import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#ffe600' }} className="text-dark text-center py-3 mt-5 border-top">
      <div className="container">
        <small>
          &copy; {new Date().getFullYear()} Milan. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
