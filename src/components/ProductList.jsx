import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const ProductList = ({ products }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleOrderClick = (product) => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '628123456789';
    const message = encodeURIComponent(
      `Halo, saya tertarik dengan Beast Parfume ${product.name}. Mohon info lebih lanjut untuk pemesanan.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Collection</span>
          <h2>Koleksi Parfume Gentleman</h2>
          <p>Setiap parfume dirancang khusus untuk pria sejati dengan karakter unik</p>
        </div>

        {!products || products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: '1.125rem', color: '#666' }}>
              Belum ada produk tersedia. Silakan tambahkan produk di Contentful.
            </p>
          </div>
        ) : (
          <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.featured && (
                <div className="product-badge">
                  <Star size={14} fill="currentColor" />
                  <span>Unggulan</span>
                </div>
              )}

              <div className="product-image">
                {product.image ? (
                  <img 
                    key={new Date().getTime()}
                    src={product.image}
                    alt={product.name}
                  />
                ) : (
                  <div className="product-placeholder">
                    <ShoppingBag size={48} />
                  </div>
                )}
              </div>

              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-name">{product.name}</h3>
                  {product.category && (
                    <span className="product-category">{product.category}</span>
                  )}
                </div>

                <p className="product-description">
                  {product.description}
                </p>

                {product.notes && (
                  <div className="product-notes">
                    <p className="notes-label">Notes:</p>
                    <p className="notes-text">{product.notes}</p>
                  </div>
                )}

                <div className="product-footer">
                  <div className="product-price">
                    {formatPrice(product.price)}
                  </div>
                  <button 
                    className="btn btn-order"
                    onClick={() => handleOrderClick(product)}
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
