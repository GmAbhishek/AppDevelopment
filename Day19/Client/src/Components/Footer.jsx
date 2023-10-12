import React from 'react';
import '../Assets/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Terms & Conditions</h3>
          <ul>
            <li>By using our website, you agree to these terms and conditions.</li>
            <li>Any unauthorized use of this website may give rise to a claim for damages.</li>
            <li>Your use of this website and any dispute arising out of such use is subject to the laws of [Your Country].</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Privacy Policy</h3>
          <ul>
            <li>Your privacy is important to us.</li>
            <li>We may collect personal information for the purpose of providing you with our services.</li>
            <li>We do not sell, trade, or otherwise transfer your personal information to outside parties.</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/login/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/?lang=en">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/?hl=en">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Copyright &copy; 2023 GoMart Grocery</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
