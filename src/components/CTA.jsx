import React, { useState } from 'react';
import { MessageCircle, Send, Check } from 'lucide-react';

const CTA = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';

  const products = [
    'Malik - The King',
    'Maher - The Skilled',
    'Pilih Produk Lainnya'
  ];

  const handleWhatsAppClick = () => {
    let message = 'Halo Beast Parfume! ';
    
    if (selectedProduct && selectedProduct !== 'Pilih Produk Lainnya') {
      message += `Saya tertarik dengan ${selectedProduct}. `;
    }
    
    message += 'Mohon informasi lebih lanjut mengenai:\n';
    message += '- Ketersediaan produk\n';
    message += '- Harga dan promo\n';
    message += '- Cara pemesanan\n\n';
    message += 'Terima kasih!';

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <div className="cta-icon">
              <MessageCircle size={48} strokeWidth={1.5} />
            </div>

            <h2 className="cta-title">
              Siap Menjadi Gentleman Sejati?
            </h2>
            
            <p className="cta-description">
              Dapatkan parfume eksklusif Beast Parfume sekarang juga! 
              Hubungi kami via WhatsApp untuk informasi lengkap dan promo spesial.
            </p>

            <div className="cta-form">
              <label htmlFor="product-select" className="form-label">
                Pilih Produk (Opsional):
              </label>
              <select
                id="product-select"
                className="product-select"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">-- Pilih Produk --</option>
                {products.map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>

            <button 
              className="btn btn-whatsapp"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle size={20} />
              <span>Pesan via WhatsApp</span>
              <Send size={16} />
            </button>

            <div className="cta-benefits">
              <div className="benefit-item">
                <Check size={16} />
                <span>Fast Response</span>
              </div>
              <div className="benefit-item">
                <Check size={16} />
                <span>Free Konsultasi</span>
              </div>
              <div className="benefit-item">
                <Check size={16} />
                <span>Promo Menarik</span>
              </div>
            </div>
          </div>

          <div className="cta-decorative">
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-circle circle-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
