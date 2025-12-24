import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import WhyUs from './components/WhyUs';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { getProducts } from './services/contentful';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch products from Contentful
        const allProducts = await getProducts();
        setProducts(allProducts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Gagal memuat produk. Pastikan Contentful sudah dikonfigurasi dengan benar.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Memuat Beast Parfume...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {error && (
        <div style={{
          background: '#f8d7da',
          color: '#721c24',
          padding: '12px',
          textAlign: 'center',
          fontSize: '14px',
          borderBottom: '1px solid #f5c6cb'
        }}>
          ⚠️ {error}
        </div>
      )}
      
      {/* Hero Section - Attention (AIDA) */}
      <Hero />
      
      {/* Product List - Interest (AIDA) */}
      <ProductList products={products} />
      
      {/* Why Us - Desire (AIDA) */}
      <WhyUs />
      
      {/* Social Proof - Desire (AIDA) */}
      <SocialProof />
      
      {/* CTA - Action (AIDA) */}
      <CTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
