import React from 'react';

const Brands: React.FC = () => {
  return (
    <section className="brands">
      <h2> Navegue por marcas </h2>

      <div className="brands_list">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="logo">
            <img src="/img/Group 35.svg" alt="econverse" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
