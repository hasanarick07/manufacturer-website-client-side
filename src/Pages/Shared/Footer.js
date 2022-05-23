import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-css">
     <div>
     <footer class="footer p-10 bg-base-200 text-base-content grid-cols-3 justify-items-center">
        <div>
          <span class="footer-title">Services</span>
          <Link to="" class="link link-hover">
            Branding
          </Link>
          <Link to="" class="link link-hover">
            Design
          </Link>
          <Link to="" class="link link-hover">
            Marketing
          </Link>
          <Link to="" class="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <Link to="" class="link link-hover">
            About us
          </Link>
          <Link to="" class="link link-hover">
            Contact
          </Link>
          <Link to="" class="link link-hover">
            Jobs
          </Link>
          <Link to="" class="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <Link to="" class="link link-hover">
            Terms of use
          </Link>
          <Link to="" class="link link-hover">
            Privacy policy
          </Link>
          <Link to="" class="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <p>Copyright &copy; {year} - All right reserved by manufacturer</p>
        </div>
      </footer>
     </div>
    </div>
  );
};

export default Footer;
