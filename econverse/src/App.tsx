import React, { useState, useEffect } from 'react';
import './App.css';
import { Product, ProductsData } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Categories from './components/Categories';
import Vitrine from './components/Vitrine';
import Partners from './components/Partners';
import Brands from './components/Brands';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/produtos.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar produtos');
        }
        const data: ProductsData = await response.json();
        if (data.success && data.products) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    };

    loadProducts();
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Categories />
      <Vitrine
        title="Produtos relacionados"
        products={products}
        onProductClick={handleProductClick}
      />
      <Partners />
      <Vitrine
        title="Produtos relacionados"
        products={products}
        onProductClick={handleProductClick}
      />
      <Partners />
      <Brands />
      <Vitrine
        title="Produtos relacionados"
        products={products}
        onProductClick={handleProductClick}
      />
      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
