import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="mask_group">
      <div className="partner">
        <div>
          <div className="partner_card">
            <img src="/img/Mask Group.svg" alt="Parceiros" />
          </div>
          <h2>Parceiros</h2>
          <p> Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#parceiros">
            <button type="button" className="check"> CONFIRA</button>
          </a>
        </div>

        <div>
          <div className="partner_card">
            <img src="/img/Mask Group.svg" alt="Parceiros" />
          </div>
          <h2>Parceiros</h2>
          <p> Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#parceiros">
            <button type="button" className="check"> CONFIRA</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
