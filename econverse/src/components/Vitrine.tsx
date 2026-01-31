import React from 'react';
import { Product } from '../types';
import Carousel from './Carousel';

interface VitrineProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const Vitrine: React.FC<VitrineProps> = ({ title, products, onProductClick }) => {
  return (
    <section className="vitrini">
      <div className="vitrini-header">
        <span className="vitrini-line"></span>
        <h1>{title}</h1>
        <span className="vitrini-line"></span>
      </div>

      <div className="total_tags">
        <a href="#celulares"><button type="button" className="tags"> CELULARES </button></a>
        <a href="#acessorios"><button type="button" className="tags"> ACESSÓRIOS </button></a>
        <a href="#tablets"><button type="button" className="tags"> TABLETS </button></a>
        <a href="#notebooks"><button type="button" className="tags"> NOTEBOOKS </button></a>
        <a href="#tvs"><button type="button" className="tags"> TVS </button></a>
        <a href="#todos"><button type="button" className="tags"> VER TODOS</button></a>
      </div>

      <Carousel products={products} onProductClick={onProductClick} />
    </section>
  );
};

export default Vitrine;
