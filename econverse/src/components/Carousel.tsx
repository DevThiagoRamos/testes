import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CarouselProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  itemsPerView?: number;
}

const Carousel: React.FC<CarouselProps> = ({ products, onProductClick, itemsPerView = 4 }) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const navigate = (direction: 'next' | 'prev') => {
    const totalProducts = products.length;

    if (direction === 'next') {
      if (currentPosition + itemsPerView < totalProducts) {
        setCurrentPosition(currentPosition + itemsPerView);
      } else {
        setCurrentPosition(0);
      }
    } else {
      if (currentPosition >= itemsPerView) {
        setCurrentPosition(currentPosition - itemsPerView);
      } else {
        const remainder = totalProducts % itemsPerView;
        setCurrentPosition(remainder === 0 ? totalProducts - itemsPerView : totalProducts - remainder);
      }
    }
  };

  const visibleProducts = products.slice(currentPosition, currentPosition + itemsPerView);

  return (
    <div className="carousel-container">
      <button className="carousel-arrow carousel-arrow-left" onClick={() => navigate('prev')}>
        ‹
      </button>
      <div className="related_products">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={`${currentPosition}-${index}`}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
      <button className="carousel-arrow carousel-arrow-right" onClick={() => navigate('next')}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
