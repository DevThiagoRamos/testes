# COMENTÁRIOS EXPLICATIVOS DAS ALTERAÇÕES REALIZADAS

## 📋 RESUMO DAS MUDANÇAS

Este documento explica todas as alterações feitas no projeto de front-end.

---

## 🎨 ALTERAÇÕES NO HTML (index.html)

### 1. **Seção de Vitrine Header com Linhas Decorativas**
```html
<div class="vitrini-header">
    <span class="vitrini-line"></span>
    <h1> Produtos relacionados </h1>
    <span class="vitrini-line"></span>
</div>
```
**O que faz:** Cria linhas horizontais nas laterais do título "Produtos relacionados" para um visual mais elegante, igual ao Figma.

---

### 2. **Carrossel de Produtos**
```html
<div class="carousel-container">
    <button class="carousel-arrow carousel-arrow-left" data-container="related_products">‹</button>
    <div id="related_products" class="related_products"></div>
    <button class="carousel-arrow carousel-arrow-right" data-container="related_products">›</button>
</div>
```
**O que faz:**
- `carousel-container`: Container que organiza as setas e produtos
- `carousel-arrow`: Botões com setas para navegação (‹ e ›)
- `data-container="related_products"`: Atributo que identifica qual container será navegado pelo JavaScript
- `related_products`: Container vazio que será preenchido com produtos do JSON via JavaScript

---

### 3. **Cards de Parceiros com Posicionamento Absoluto**
```html
<div class="partner_card">
    <img src="/img/Mask Group.svg" alt="Parceiros">
</div>
<h2>Parceiros</h2>
<p>Lorem ipsum dolor sit amet, consectetur</p>
<button class="check">CONFIRA</button>
```
**O que faz:** 
- A imagem fica como fundo
- O título, descrição e botão são posicionados SOBRE a imagem usando CSS com posição absoluta
- Um gradiente escuro é adicionado via CSS para melhorar a legibilidade do texto

---

### 4. **Modal de Detalhes do Produto**
```html
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-body">
            <div class="modal-image">
                <img id="modalProductImage" src="" alt="Produto">
            </div>
            <div class="modal-info">
                <h2 id="modalProductName"></h2>
                <p id="modalProductDescription"></p>
                <div class="modal-price">
                    <p class="price"><strong id="modalProductPrice"></strong></p>
                </div>
                <button type="button" class="shop" id="modalBuyButton">COMPRAR</button>
            </div>
        </div>
    </div>
</div>
```
**O que faz:** 
- Container que aparece quando você clica em um produto
- Mostra a foto, nome, descrição e preço do produto
- O botão `&times;` fecha o modal
- Os IDs com `modalProduct*` são preenchidos dinamicamente pelo JavaScript

---

### 5. **Footer com Estrutura de Colunas**
```html
<section class="footer_2">
    <div class="footer_content">
        <div class="footer_brand">
            <img src="/img/Group 35.svg" alt="econverse">
            <p>Lorem ipsum dolor sit amet...</p>
            <div class="social_icons">
                <a href="#"><img src="/img/instagram.svg"></a>
                ...
            </div>
        </div>
        
        <div class="footer_divider"></div>
        
        <div class="footer_columns">
            <div class="footer_column">
                <h3>Institucional</h3>
                <ul><li><a href="#">Sobre Nós</a></li>...</ul>
            </div>
            ...
        </div>
    </div>
</section>
```
**O que faz:** 
- Logo e descrição no lado esquerdo
- Ícones sociais (Instagram, Facebook, LinkedIn)
- Linha divisória no meio
- 3 colunas de links (Institucional, Ajuda, Termos) no lado direito

---

## 🎯 ALTERAÇÕES NO CSS (style.css)

### 1. **Header da Vitrine com Linhas**
```css
.vitrini-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 24px;
}

.vitrini-line {
    flex: 1;
    height: 2px;
    background-color: #e0e0e0;
    max-width: 400px;
}
```
**O que faz:** Cria um layout flexbox com as linhas ocupando espaço lateral e o título no meio.

---

### 2. **Carrossel - Container e Botões**
```css
.carousel-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
}

.carousel-arrow {
    background-color: #ffffff;
    color: #3f3f40;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    line-height: 1;
    padding: 0;
}

.carousel-arrow:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
}
```
**O que faz:**
- Botões circulares e pequenos com sombra delicada
- Seta centralizada dentro do botão
- Efeito hover que muda cor e aumenta sombra
- `line-height: 1; padding: 0;` garante que a seta fique perfeitamente centralizada

---

### 3. **Modal - Estilos**
```css
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
    background-color: #ffffff;
    margin: 5% auto;
    padding: 40px;
    border-radius: 10px;
    max-width: 900px;
    width: 90%;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.3s ease-in-out;
}

@keyframes slideIn {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
```
**O que faz:**
- `position: fixed` fixa o modal na tela
- `display: none` inicialmente oculto (aparece via JavaScript)
- Animações suaves de entrada (fadeIn para fundo, slideIn para conteúdo)
- `z-index: 1000` garante que fique acima de tudo

---

### 4. **Parceiros - Posicionamento Absoluto**
```css
.partner > div {
    position: relative;
    width: 634px;
    height: 350px;
}

.partner_card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);
    border-radius: 20px;
}

.partner h2 {
    font-size: 40px;
    position: absolute;
    top: 100px;
    left: 30px;
    margin: 0;
    color: #ffffff;
    z-index: 2;
}

.partner p {
    position: absolute;
    top: 160px;
    left: 30px;
    margin: 0;
    color: #ffffff;
    font-size: 16px;
    z-index: 2;
}

.partner .check {
    position: absolute;
    bottom: 30px;
    left: 30px;
    z-index: 2;
}
```
**O que faz:**
- `position: relative` no container permite que filhos usem `position: absolute`
- `::after` cria um gradiente escuro que fica sobre a imagem
- `top: 100px; left: 30px` posicionam título e descrição
- `z-index: 2` coloca texto acima do gradiente

---

### 5. **Footer - Estrutura em Colunas**
```css
.footer_content {
    display: flex;
    align-items: flex-start;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
}

.footer_brand {
    flex: 0 0 300px;
}

.footer_divider {
    flex: 0 0 1px;
    height: 200px;
    background-color: #e0e0e0;
}

.footer_columns {
    flex: 1;
    display: flex;
    gap: 80px;
}

.social_icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 2px solid #3f3f40;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.social_icons a:hover {
    background-color: #3442b5;
    border-color: #3442b5;
}
```
**O que faz:**
- `display: flex` organiza os elementos em linha
- `footer_brand` ocupa espaço fixo de 300px
- `footer_divider` é uma linha vertical fina
- `footer_columns` ocupa o resto do espaço
- Ícones sociais são botões circulares com animação hover

---

## ⚙️ ALTERAÇÕES NO JAVASCRIPT (script.js)

### 1. **Classe ProductManager - Gerenciador de Produtos**
```javascript
class ProductManager {
    constructor() {
        this.products = [];
        this.carouselPositions = {
            related_products: 0,
            related_products_2: 0,
            related_products_extra: 0
        };
    }
    
    formatPrice(price) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price);
    }
}
```
**O que faz:**
- `products`: Array que armazena todos os produtos do JSON
- `carouselPositions`: Rastreia qual produto começa em cada carrossel
- `formatPrice()`: Converte números em formato de moeda brasileira (ex: 1000 → R$ 1.000,00)

---

### 2. **Carregar Produtos do JSON**
```javascript
async loadProducts() {
    try {
        const response = await fetch('../produtos.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar produtos');
        }
        const data = await response.json();
        
        if (data.success && data.products) {
            this.products = data.products;
            this.renderProducts('related_products');
            this.renderProducts('related_products_2');
            this.renderProducts('related_products_extra');
        }
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}
```
**O que faz:**
- `fetch()`: Faz requisição para o arquivo JSON
- `await`: Aguarda a resposta
- `.json()`: Converte resposta em objeto JavaScript
- Renderiza os 3 carrosséis com os produtos

---

### 3. **Renderizar Produtos no DOM**
```javascript
renderProducts(containerId, itemsPerView = 4) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    const startIndex = this.carouselPositions[containerId] || 0;
    const visibleProducts = this.products.slice(startIndex, startIndex + itemsPerView);

    visibleProducts.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'products';
        productCard.style.cursor = 'pointer';

        productCard.innerHTML = `
            <div>
                <img src="${product.photo}" alt="${product.productName}">
            </div>
            <p>${product.descriptionShort}</p>
            <p>${this.formatPrice(product.price)}</p>
            <p>${this.formatPrice(product.price * 0.9)}</p>
            <p>ou 2x de ${this.formatPrice((product.price * 0.9) / 2)} sem juros</p>
            <p>Frete grátis</p>
            <button type="button" class="shop">COMPRAR</button>
        `;

        productCard.addEventListener('click', () => {
            this.openModal(product);
        });

        container.appendChild(productCard);
    });
}
```
**O que faz:**
- `itemsPerView = 4`: Mostra 4 produtos por vez
- `slice(startIndex, startIndex + 4)`: Pega apenas 4 produtos baseado na posição atual
- `forEach()`: Cria um card para cada produto visível
- `addEventListener('click')`: Abre modal quando você clica no produto
- `appendChild()`: Adiciona o card ao container

---

### 4. **Navegação do Carrossel**
```javascript
navigateCarousel(direction, containerId, itemsPerView = 4) {
    const totalProducts = this.products.length;
    const currentPosition = this.carouselPositions[containerId] || 0;

    if (direction === 'next') {
        if (currentPosition + itemsPerView < totalProducts) {
            this.carouselPositions[containerId] = currentPosition + itemsPerView;
        } else {
            this.carouselPositions[containerId] = 0; // Volta ao início
        }
    } else if (direction === 'prev') {
        if (currentPosition >= itemsPerView) {
            this.carouselPositions[containerId] = currentPosition - itemsPerView;
        } else {
            // Volta ao final
            const remainder = totalProducts % itemsPerView;
            this.carouselPositions[containerId] = remainder === 0 
                ? totalProducts - itemsPerView 
                : totalProducts - remainder;
        }
    }

    this.renderProducts(containerId, itemsPerView);
}
```
**O que faz:**
- Ao clicar na seta direita (next): Avança 4 produtos. Se chegar no fim, volta ao início
- Ao clicar na seta esquerda (prev): Volta 4 produtos. Se estiver no início, vai para o fim
- Após atualizar a posição, re-renderiza os produtos

---

### 5. **Abrir Modal com Detalhes do Produto**
```javascript
openModal(product) {
    const modal = document.getElementById('modal');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductPrice = document.getElementById('modalProductPrice');

    if (modalProductImage) modalProductImage.src = product.photo;
    if (modalProductName) modalProductName.textContent = product.productName;
    if (modalProductDescription) modalProductDescription.textContent = product.descriptionShort;
    if (modalProductPrice) modalProductPrice.textContent = this.formatPrice(product.price);

    if (modal) {
        modal.style.display = 'block';
    }
}
```
**O que faz:**
- Pega os elementos do modal pelo ID
- Preenche cada um com as informações do produto clicado
- `modal.style.display = 'block'` torna o modal visível

---

### 6. **Fechar Modal**
```javascript
closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
```
**O que faz:** Oculta o modal novamente

---

### 7. **Inicializar Listeners (Eventos)**
```javascript
initializeListeners() {
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', () => this.closeModal());
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            this.closeModal();
        }
    });

    // Listeners para botões de carrossel
    const carouselButtons = document.querySelectorAll('.carousel-arrow');
    carouselButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const containerId = button.dataset.container;
            const direction = button.classList.contains('carousel-arrow-left') ? 'prev' : 'next';
            this.navigateCarousel(direction, containerId);
        });
    });
}
```
**O que faz:**
- Adiciona evento de clique no botão `&times;` para fechar modal
- Fecha modal ao clicar fora dele (no fundo escuro)
- Para cada seta do carrossel:
  - Pega o `data-container` para saber qual carrossel navegar
  - Verifica se é seta esquerda (prev) ou direita (next)
  - Chama `navigateCarousel()` com os parâmetros corretos

---

## 📊 ARQUIVO JSON (produtos.json)

```json
{
  "success": true,
  "products": [
    {
      "productName": "Nome do Produto",
      "descriptionShort": "Descrição curta",
      "photo": "URL da foto",
      "price": 15000
    },
    ...
  ]
}
```
**Campos:**
- `productName`: Nome que aparece no modal
- `descriptionShort`: Descrição que aparece no card e no modal
- `photo`: URL da imagem do produto
- `price`: Preço em centavos (15000 = R$ 150,00)

---

## 🚀 FLUXO DE FUNCIONAMENTO

1. **Página carrega** → JavaScript executa
2. **`loadProducts()` é chamado** → Faz fetch do JSON
3. **Produtos são armazenados** → `this.products = data.products`
4. **`renderProducts()` é chamado 3x** → Cria cards para cada carrossel
5. **Usuário clica em um produto** → `openModal()` é chamado
6. **Modal aparece com detalhes** → Dados preenchidos dinamicamente
7. **Usuário clica em seta** → `navigateCarousel()` move para próximos 4 produtos
8. **Produtos são re-renderizados** → Novos cards aparecem

---

## 🎨 ESTRUTURA DE CORES

- **Primária**: #3442b5 (Azul)
- **Secundária**: #f7ca11 (Amarelo)
- **Fundo**: #ffffff (Branco)
- **Fundo Secundário**: #f4f4f4 (Cinza claro)
- **Texto**: #3f3f40 (Cinza escuro)
- **Linhas/Dividers**: #e0e0e0 (Cinza muito claro)

---

## 📱 RESPONSIVIDADE

O projeto usa:
- **Viewport meta tag** para mobile
- **Flexbox** para layouts responsivos
- **Max-width** em containers para limitar largura máxima
- **Padding/Margin** que se adaptam

---

## ✅ RESUMO FINAL

✓ Consumo de dados via JSON
✓ Carrossel de produtos com navegação
✓ Modal com detalhes do produto ao clicar
✓ Footer com estrutura completa
✓ Design elegante e responsivo
✓ Animações suaves
✓ Código bem organizado e comentado
