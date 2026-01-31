import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <section className="footer_1">
        <div className="subscribe">
          <h2> Inscreva-se na nossa newsletter </h2>
          <p> Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Ecoverse</p>
        </div>

        <div className="form">
          <input type="text" className="name" placeholder="Digite seu nome" />
          <input type="email" className="email" placeholder="Digite seu e-mail" />
          <button type="button" className="subscribe_button"> INSCREVER-SE </button>
        </div>
      </section>

      <section className="footer_2">
        <div className="footer_content">
          <div className="footer_brand">
            <img src="/img/Group 35.svg" alt="econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="social_icons">
              <a href="#instagram"><img src="/img/instagram.svg" alt="Instagram" /></a>
              <a href="#facebook"><img src="/img/facebook.svg" alt="Facebook" /></a>
              <a href="#linkedin"><img src="/img/linkedin.svg" alt="LinkedIn" /></a>
            </div>
          </div>

          <div className="footer_divider"></div>

          <div className="footer_columns">
            <div className="footer_column">
              <h3>Institucional</h3>
              <ul>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#movimento">Movimento</a></li>
                <li><a href="#trabalhe">Trabalhe conosco</a></li>
              </ul>
            </div>

            <div className="footer_column">
              <h3>Ajuda</h3>
              <ul>
                <li><a href="#suporte">Suporte</a></li>
                <li><a href="#contato">Fale Conosco</a></li>
                <li><a href="#faq">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className="footer_column">
              <h3>Termos</h3>
              <ul>
                <li><a href="#termos">Termos e Condições</a></li>
                <li><a href="#privacidade">Política de Privacidade</a></li>
                <li><a href="#troca">Troca e Devolução</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </footer>
  );
};

export default Footer;
