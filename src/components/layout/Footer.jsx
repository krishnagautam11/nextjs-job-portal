"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="custom-container">

        <div className="footer-grid">

          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="footer-title"> 
              <Link href="/" className="text-2xl font-bold">
              <Image
                src="/images/logo.png"
                alt="Skillhunt logo"
                width={140}
                height={40}
                priority
              />
            </Link></h3>
            <p className="footer-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>

            <div className="footer-socials">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-title">Employers</h3>
            <ul className="footer-links">
              <li><a href="#">Browse Candidates</a></li>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">Employer Listing</a></li>
              <li><a href="#">Resume Page</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Job Packages</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-title">Candidate</h3>
            <ul className="footer-links">
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">Submit Resume</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Browse Categories</a></li>
              <li><a href="#">My Bookmarks</a></li>
              <li><a href="#">Candidate Listing</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-title">Account</h3>
            <ul className="footer-links">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Create Account</a></li>
              <li><a href="#">Checkout</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="footer-col">
            <h3 className="footer-title">Have a Questions?</h3>

            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>
                  203 Fake St. Mountain View,<br />
                  San Francisco, California, USA
                </span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>+2 392 3929 210</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@yourdomain.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} JobAgora. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
