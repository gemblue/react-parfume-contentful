import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div 
        className="hero-background"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
        }}
      ></div>
      
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            {/* Left side - Text content */}
            <div className="hero-text">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>Limited Edition</span>
              </div>
              
              <h1 className="hero-title">
                Beast Parfume
              </h1>
              
              <p className="hero-subtitle">
                Wewangian Gentleman yang <b>Tahan Lama</b> & <b>Autentik</b>. Menghilangkan masalah parfum yang cepat pudar, aroma sintetis, dan iritasi kulit.
                Beast diracik dengan konsentrasi tinggi bahan premium dan formula transparan agar aroma tetap berkelas dan stabil sepanjang hari—tanpa berlebihan atau meninggalkan kesan artifisial.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={scrollToProducts}>
                  Lihat Koleksi
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Kenapa Beast?
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Pelanggan Puas</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4.9/5</div>
                  <div className="stat-label">Rating</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Original</div>
                </div>
              </div>
            </div>

            {/* Right side - Decorative element */}
            <div className="hero-image">
              <div className="product-showcase">
                <div className="showcase-placeholder">
                  <img style={{ width: '100%' }} src="https://parfumes-1389906377.cos.ap-singapore.myqcloud.com/Gemini_Generated_Image_xdoz2yxdoz2yxdoz.png" alt="" />
                </div>
                <div className="showcase-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
