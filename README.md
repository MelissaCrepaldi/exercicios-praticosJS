# 🚀 Exercícios Práticos em JavaScript

Este repositório contém uma aplicação web interativa desenvolvida para praticar os conceitos fundamentais do **JavaScript**, integrando-o com **HTML5** e **CSS3**. 

A página reúne três pequenos exercícios práticos focados na manipulação do **DOM (Document Object Model)**, tratamento de entradas do usuário e operações matemáticas simples.

---

## 📌 O que os códigos apresentam

O projeto é composto por 3 módulos de exercícios práticos na mesma página:

1. **Exercício 1 — Apresentação:**
   - Permite que o usuário digite seu nome em um campo de texto.
   - Ao clicar no botão **"Apresentar"**, o JavaScript captura o valor digitado e exibe uma mensagem personalizada de saudação na tela (`Meu nome é [Nome]!`).

2. **Exercício 2 — Soma:**
   - Apresenta dois campos numéricos para entrada de dados.
   - Ao clicar em **"Somar"**, o código converte os valores para tipo numérico (`Number()`), realiza a adição matemática e exibe o resultado formatado.

3. **Exercício 3 — Subtração:**
   - Semelhante ao exercício de soma, recebe dois números nos inputs.
   - Ao clicar em **"Subtrair"**, realiza a operação de subtração e imprime o resultado na tela.

---

## 🛠️ Conceitos e Tecnologias Aplicadas

- **HTML5:** Estruturação semântica da página (`<header>`, `<section>`, `<input>`, `<button>`, etc.).
- **CSS3:** 
  - Estilização moderna com paleta de cores personalizada.
  - Layout responsivo utilizando **CSS Grid** (`grid-template-columns: repeat(auto-fit, ...)`).
  - Componentização visual dos cartões de exercícios.
- **JavaScript (ES6):**
  - Seleção de elementos HTML com `document.querySelector()`.
  - Manipulação do DOM e atualização de conteúdo dinâmico via `textContent`.
  - Escuta de eventos com `addEventListener('click', ...)`.
  - Conversão de tipos de dados (`Number()`) para garantir cálculos matemáticos precisos.

---

## 📂 Estrutura do Projeto

```text
.
├── index.html   # Estrutura HTML da aplicação e dos exercícios
├── style.css    # Estilização e layout responsivo
└── script.js    # Lógica de interatividade e manipulação do DOM
```

---

## 💻 Como executar o projeto

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/MelissaCrepaldi/exercicios-praticosJS.git
   ```
2. **Navegue até a pasta do projeto:**
   ```bash
   cd exercicios-praticosJS
   ```
3. **Abra o arquivo `index.html`** no seu navegador de preferência (ou utilize a extensão *Live Server* no VS Code).

---

✨ *Projeto desenvolvido para fins de aprendizado e prática em desenvolvimento web frontend!*