import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Beast Parfume</h3>
            <p className="footer-tagline">
              Parfume Gentleman Eksklusif untuk Pria Sejati
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@beastparfume.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+628123456789" className="social-link" aria-label="Phone">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Produk</h4>
            <ul className="footer-links">
              <li><a href="#products">Koleksi Parfume</a></li>
              <li><a href="#products">Produk Unggulan</a></li>
              <li><a href="#products">New Arrivals</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Informasi</h4>
            <ul className="footer-links">
              <li><a href="#why">Tentang Kami</a></li>
              <li><a href="#testimonials">Testimoni</a></li>
              <li><a href="#cta">Cara Pemesanan</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Hubungi Kami</h4>
            <ul className="footer-contact">
              <li>WhatsApp: +62 812 3456 789</li>
              <li>Email: info@beastparfume.com</li>
              <li>Jam Operasional: 09:00 - 21:00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Beast Parfume. All rights reserved.</p>
          <p className="footer-disclaimer">
            100% Original Product | Hati-hati Penipuan | Pesan Hanya Melalui Official Contact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
