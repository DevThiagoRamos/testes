import React from 'react';
import { Product } from '../types';
import Carousel from './Carousel';

interface VitrineProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const Vitrine2: React.FC<VitrineProps> = ({ title, products, onProductClick }) => {
  return (
    <section className="vitrini">
      <div className="vitrini-header">
        <span className="vitrini-line"></span>
        <h1>{title}</h1>
        <span className="vitrini-line"></span>
      </div>

      <p className="vitrine-subtitle">Ver mais</p>

      <Carousel products={products} onProductClick={onProductClick} />
    </section>
  );
};

export default Vitrine2;
