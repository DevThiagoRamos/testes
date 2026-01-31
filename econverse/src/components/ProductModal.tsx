import React from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const discountedPrice = product.price * 0.9;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} id="modalProductImage" />
          </div>
          <div className="modal-info">
            <h2 id="modalProductName">{product.productName}</h2>
            <p id="modalProductDescription">{product.descriptionShort}</p>
            <div className="modal-price">
              <p style={{ textDecoration: 'line-through', color: '#808080' }}>
                {formatPrice(product.price)}
              </p>
              <p className="price" id="modalProductPrice">
                {formatPrice(discountedPrice)}
              </p>
            </div>
            <p>{`ou 2x de ${formatPrice(discountedPrice / 2)} sem juros`}</p>
            <p style={{ color: '#3442b5' }}>Frete grátis</p>
            <button className="shop" id="modalBuyButton">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
