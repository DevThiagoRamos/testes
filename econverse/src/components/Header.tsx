import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <section className="header">
        <div className="safe">
          <img src="/img/ShieldCheck.svg" alt="Compra 100% segura" />
          <div>
            <span>Compra</span>
            <span>100% segura</span>
          </div>
        </div>

        <div className="safe_2">
          <img src="/img/Truck.svg" alt="Caminhão" />
          <div>
            <span>Frete grátis</span>
            <span> acima de R$ 200</span>
          </div>
        </div>

        <div className="safe_2">
          <img src="/img/CreditCard.svg" alt="Cartão" />
          <div>
            <span>Parcele</span>
            <span> suas compras</span>
          </div>
        </div>
      </section>

      <section className="header_2">
        <div className="logo_header">
          <img src="/img/Group 35.svg" alt="logo econverse" />
        </div>

        <div className="search_bar">
          <input type="text" className="navegation" placeholder="O que vc está procurando?" />
          <button type="submit" className="search">
            <img src="/img/MagnifyingGlass.svg" alt="Buscar" />
          </button>
        </div>

        <div className="thumbnails">
          <img src="/img/Group.svg" className="store_icon" alt="store" />
          <img src="/img/Heart.svg" className="icon" alt="Favoritos" />
          <img src="/img/UserCircle.svg" className="icon" alt="Perfil" />
          <img src="/img/ShoppingCart.svg" className="icon" alt="Carrinho de compras" />
        </div>
      </section>

      <section className="list_header">
        <a href="#categories"> TODAS CATEGORIAS</a>
        <a href="#supermercado"> SUPERMERCADO</a>
        <a href="#livros"> LIVROS </a>
        <a href="#moda"> MODA </a>
        <a href="#lancamentos">LANÇMENTOS</a>
        <a href="#footer"> OFERTAS DO DIA</a>
        <a href="#footer" className="premium">
          <img src="/img/CrownSimple.svg" alt="Assinatura" />
          ASSINATURA
        </a>
      </section>
    </header>
  );
};

export default Header;
