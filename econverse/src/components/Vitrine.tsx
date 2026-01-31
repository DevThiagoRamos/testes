import React, { useState } from 'react';
import { Product } from '../types';
import Carousel from './Carousel';

interface VitrineProps {
  title: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}

const Vitrine: React.FC<VitrineProps> = ({ title, products, onProductClick }) => {

  const [activeTag, setActiveTag] = useState("CELULARES");

  return (
    <section className="vitrini">
      <div className="vitrini-header">
        <span className="vitrini-line"></span>
        <h1>{title}</h1>
        <span className="vitrini-line"></span>
      </div>

      <div className="total_tags">
        {["CELULARES","ACESSÓRIOS","TABLETS","NOTEBOOKS","TVS","VER TODOS"]
          .map(tag => (
            <button
              key={tag}
              className={`tags ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
        ))}
      </div>

      <Carousel 
        products={products} 
        onProductClick={onProductClick} 
      />
    </section>
  );
};

export default Vitrine;
