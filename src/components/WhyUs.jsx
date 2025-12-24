import React from 'react';
import { Shield, Award, Heart, Clock } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: 'Shield',
      title: '100% Original',
      description: 'Semua produk kami dijamin original dan berkualitas premium dari sumber terpercaya.'
    },
    {
      icon: 'Award',
      title: 'Kualitas Premium',
      description: 'Formulasi khusus dengan bahan berkualitas tinggi untuk aroma yang tahan lama dan elegan.'
    },
    {
      icon: 'Heart',
      title: 'Untuk Gentleman',
      description: 'Dirancang khusus untuk pria dengan karakter kuat, percaya diri, dan berjiwa pemimpin.'
    },
    {
      icon: 'Clock',
      title: 'Long Lasting',
      description: 'Ketahanan aroma hingga 8-12 jam, menemani aktivitas Anda sepanjang hari.'
    }
  ];

  const getIcon = (iconName) => {
    const icons = {
      Shield: Shield,
      Award: Award,
      Heart: Heart,
      Clock: Clock,
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent size={40} strokeWidth={1.5} />;
  };

  return (
    <section id="why" className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2>Kenapa Memilih Beast Parfume?</h2>
          <p>Kami berkomitmen memberikan yang terbaik untuk Anda</p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">
                {getIcon(reason.icon)}
              </div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-description">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Additional value proposition */}
        <div className="value-proposition">
          <div className="value-content">
            <h3>Parfume dengan Nama Arab yang Bermakna</h3>
            <p>
              Setiap nama produk kami dipilih dengan cermat dari bahasa Arab yang memiliki makna mendalam. 
              <strong> Malik</strong> (Raja), <strong>Maher</strong> (Terampil), dan nama-nama lainnya 
              mencerminkan karakter maskulin yang kuat dan penuh makna.
            </p>
            <p>
              Lebih dari sekadar aroma, Beast Parfume adalah representasi dari kepribadian Anda - 
              seorang gentleman sejati yang percaya diri dan berkarakter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
