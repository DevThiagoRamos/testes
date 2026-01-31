import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="sale">
      <img src="/img/Rectangle 250.svg" alt="Promoção" />

      <div className="sale_text">
        <h2>Venha conhecer nossas promoções</h2>
        <span> 50% Off </span>
        <span> nos produtos</span>
        <a href="#see_all"> Ver produtos </a>
      </div>
    </section>
  );
};

export default HeroSection;
