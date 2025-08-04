import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer id="footer">
        <p className="mb-0">&copy; {new Date().getFullYear()} Sonia Nazeer. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
