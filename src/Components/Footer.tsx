import React from 'react';  // Importing React library to use JSX syntax
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';  // Importing social media icons from react-icons
import './Footer.css';  // Importing the CSS file for styling the footer

const Footer: React.FC = () => {  // Defining the Footer component
  return (
    <footer className="footer">  {/* Main footer wrapper */}
      <div className="footer-content">  {/* Container for all the content inside the footer */}
        
        {/* Quick Links Section */}
        <div className="footer-links">  {/* Wrapper for the quick links */}
          <h4>Quick Links</h4>  {/* Title of the section */}
          <ul>  {/* Unordered list for the links */}
            <li><a href="/">Home</a></li>  {/* Home link */}
            <li><a href="/about">About</a></li>  {/* About link */}
            <li><a href="/projects">Projects</a></li>  {/* Projects link */}
            <li><a href="/blog">Blog</a></li>  {/* Blog link */}
            <li><a href="/contact">Contact</a></li>  {/* Contact link */}
          </ul>
        </div>

        {/* Connect with Me Section */}
        <div className="footer-contact">  {/* Wrapper for the contact section */}
          <h4>Connect with Me</h4>  {/* Title for the section */}
          <a href="mailto:juzellerodrigues100@gmail.com" className="email-link">  {/* Link to email me */}
            <FaEnvelope /> Email Me  {/* Email icon and text */}
          </a>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">  {/* Wrapper for social media links */}
          <h4>Follow Me</h4>  {/* Title of the section */}
          <div className="social-icons">  {/* Container for the social media icons */}
            <a href="https://github.com/JuzelleRodrigues" target="_blank" rel="noopener noreferrer">  {/* Github link */}
              <FaGithub />  {/* Github icon */}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">  {/* LinkedIn link */}
              <FaLinkedin />  {/* LinkedIn icon */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">  {/* Instagram link */}
              <FaInstagram />  {/* Instagram icon */}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">  {/* Container for the footer bottom */}
        <p>&copy; 2024 Juzelle Rodrigues. Made with ❤️</p>  {/* Copyright text with a heart emoji */}
      </div>
    </footer>
  );
};

export default Footer;  {/* Exporting the Footer component to use in other parts of the application */}
