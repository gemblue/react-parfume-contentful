import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      customerName: 'Ahmad Rizki',
      rating: 5,
      comment: 'Parfume Malik benar-benar luar biasa! Aromanya maskulin dan tahan seharian. Banyak yang compliment.',
      location: 'Jakarta'
    },
    {
      id: 2,
      customerName: 'Budi Santoso',
      rating: 5,
      comment: 'Kualitas premium dengan harga yang worth it. Maher jadi favorit saya untuk meeting penting.',
      location: 'Bandung'
    },
    {
      id: 3,
      customerName: 'Farhan Abdullah',
      rating: 5,
      comment: 'Sudah coba beberapa variant, semuanya berkualitas tinggi. Packaging juga premium banget!',
      location: 'Surabaya'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < rating ? 'currentColor' : 'none'}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Social Proof</span>
          <h2>Apa Kata Mereka?</h2>
          <p>Testimoni dari pelanggan setia Beast Parfume</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={32} />
              </div>
              
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>

              <p className="testimonial-comment">
                {testimonial.comment}
              </p>

              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">{testimonial.customerName}</div>
                  <div className="author-location">
                    <MapPin size={14} />
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="trust-section">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-number">500+</div>
              <div className="trust-label">Pelanggan Puas</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">4.9/5</div>
              <div className="trust-label">Rating Rata-rata</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">98%</div>
              <div className="trust-label">Repeat Order</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">100%</div>
              <div className="trust-label">Produk Original</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
