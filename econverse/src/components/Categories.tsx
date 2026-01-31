import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Tecnologia', img: '/img/image.svg', className: 'card_1' },
    { name: 'Supermercado', img: '/img/supermercados 1.svg', className: 'card' },
    { name: 'Bebidas', img: '/img/whiskey.svg', className: 'card' },
    { name: 'Ferramentas', img: '/img/ferramentas 1.svg', className: 'card' },
    { name: 'Saúde', img: '/img/cuidados-de-saude 1.svg', className: 'card' },
    { name: 'Esportes e Fitness', img: '/img/corrida 1.svg', className: 'card' },
    { name: 'Moda', img: '/img/moda 1.svg', className: 'card' },
  ];

  return (
    <section id="categories">
      <div className="container_categories">
        {categories.map((category) => (
          <div key={category.name} className="card_list">
            <div className={category.className}>
              <img src={category.img} alt={category.name} />
            </div>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
