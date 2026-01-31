import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const discountedPrice = product.price * 0.9;

  return (
    <div className="products" onClick={() => onProductClick(product)}>
      <div>
        <img src={product.photo} alt={product.productName} />
      </div>
      <p>{product.descriptionShort}</p>
      <p>{formatPrice(product.price)}</p>
      <p>{formatPrice(discountedPrice)}</p>
      <p>ou 2x de {formatPrice(discountedPrice / 2)} sem juros</p>
      <p>Frete grátis</p>
      <button type="button" className="shop">COMPRAR</button>
    </div>
  );
};

export default ProductCard;
