# 📘 Guia Essencial de HTML

Este guia contém apenas as **tags e atributos mais utilizados no desenvolvimento web moderno**.

---

# 🥇 1. Estrutura Básica do Documento

| Tag | Descrição | Exemplo |
|------|------------|----------|
| `<!DOCTYPE html>` | Define o documento como HTML5 | `<!DOCTYPE html>` |
| `<html>` | Elemento raiz da página | `<html lang="pt-BR">` |
| `<head>` | Metadados da página | `<head>...</head>` |
| `<title>` | Título da aba do navegador | `<title>Minha Página</title>` |
| `<meta>` | Configurações como charset e responsividade | `<meta charset="UTF-8">` |
| `<link>` | Importa CSS externo | `<link rel="stylesheet" href="style.css">` |
| `<script>` | Importa ou escreve JavaScript | `<script src="app.js"></script>` |
| `<body>` | Conteúdo visível da página | `<body>...</body>` |

---

# 🥈 2. Estrutura Semântica

| Tag | Descrição |
|------|------------|
| `<header>` | Cabeçalho da página ou seção |
| `<nav>` | Menu de navegação |
| `<main>` | Conteúdo principal |
| `<section>` | Seção de conteúdo |
| `<article>` | Conteúdo independente |
| `<footer>` | Rodapé |

---

# 🥉 3. Texto e Conteúdo

| Tag | Descrição |
|------|------------|
| `<h1>` até `<h6>` | Títulos |
| `<p>` | Parágrafo |
| `<strong>` | Destaque importante (semântico) |
| `<em>` | Ênfase |
| `<br>` | Quebra de linha |
| `<hr>` | Linha divisória |
| `<code>` | Código inline |
| `<pre>` | Bloco de código |

---

# 🔗 4. Links e Mídia

| Tag | Descrição |
|------|------------|
| `<a>` | Link |
| `<img>` | Imagem |
| `<video>` | Vídeo |
| `<iframe>` | Incorporação externa |

---

# 📋 5. Listas

| Tag | Descrição |
|------|------------|
| `<ul>` | Lista não ordenada |
| `<ol>` | Lista ordenada |
| `<li>` | Item da lista |

---

# 📊 6. Tabelas

| Tag | Descrição |
|------|------------|
| `<table>` | Tabela |
| `<tr>` | Linha |
| `<th>` | Célula de cabeçalho |
| `<td>` | Célula |

---

# 📝 7. Formulários

| Tag | Descrição |
|------|------------|
| `<form>` | Formulário |
| `<input>` | Campo de entrada |
| `<textarea>` | Área de texto |
| `<button>` | Botão |
| `<label>` | Rótulo |
| `<select>` | Lista suspensa |
| `<option>` | Opção da lista |

---

# 🧱 8. Containers

| Tag | Descrição |
|------|------------|
| `<div>` | Container em bloco |
| `<span>` | Container inline |

---

# 📌 Atributos Essenciais

## Globais

| Atributo | Função | Exemplo |
|-----------|--------|----------|
| `class` | Classe para CSS/JS | `<div class="container">` |
| `id` | Identificador único | `<section id="sobre">` |
| `lang` | Idioma da página | `<html lang="pt-BR">` |

---

## Links (`<a>`)

| Atributo | Função | Exemplo |
|-----------|--------|----------|
| `href` | Destino do link | `<a href="/contato">` |
| `target` | Onde abrir o link | `<a target="_blank">` |
| `rel` | Segurança para `_blank` | `<a rel="noopener noreferrer">` |

---

## Imagens (`<img>`)

| Atributo | Função | Exemplo |
|-----------|--------|----------|
| `src` | Caminho da imagem | `<img src="foto.jpg">` |
| `alt` | Descrição da imagem | `<img alt="Produto">` |

---

## Formulários

| Atributo | Função | Exemplo |
|-----------|--------|----------|
| `type` | Tipo do input | `<input type="email">` |
| `name` | Nome enviado ao backend | `<input name="email">` |
| `placeholder` | Texto de ajuda | `<input placeholder="Digite seu email">` |
| `required` | Campo obrigatório | `<input required>` |

---

## Vídeo

| Atributo | Função | Exemplo |
|-----------|--------|----------|
| `controls` | Mostra controles | `<video controls>` |
| `muted` | Inicia sem som | `<video muted>` |

---

📎 Versão focada apenas no que realmente é utilizado em projetos reais.


# 🎨 CSS — GUIA COMPLETO E ORGANIZADO

---

# 📌 1. FUNDAMENTOS DO CSS

## 🔹 Conceitos Centrais (ordem de importância)

1. Cascata - Define qual regra vence quando há conflito.
2. Especificidade - Determina a prioridade entre seletores.
3. Box Model - Define como o tamanho e espaçamento dos elementos funcionam.
4. Herança - Permite que propriedades passem do pai para o filho.
5. Ordem de carregamento dos arquivos - A última regra lida pode sobrescrever as anteriores.

---

# 📌 2. SELETORES 

| Ordem | Tipo de Seletor | Descrição |
|-------|------------------|------------|
| 1 | Classe | Reutilizável e base da organização moderna |
| 2 | ID | Identificador único |
| 3 | Descendente | Seleciona elementos dentro de outro |
| 4 | Filho direto | Seleciona apenas filhos imediatos |
| 5 | Pseudo-classes | Estados do elemento |
| 6 | Atributo | Baseado em atributos HTML |
| 7 | Tag | Seleciona pelo nome da tag |
| 8 | Universal | Seleciona todos os elementos |
| 9 | Pseudo-elementos | Seleciona partes específicas |

---

# 📌 3. BOX MODEL 

## Componentes

1. Width / Height - Define o tamanho do conteúdo.
2. Padding - Espaço interno entre conteúdo e borda.
3. Border - Linha que envolve o elemento.
4. Margin - Espaço externo entre elementos.
5. Box-sizing - Controla como o tamanho total é calculado.

---

# 📌 4. PROPRIEDADES DE LAYOUT

## 🔹 Estrutura principal (ordem de importância)

| Ordem | Propriedade | Função |
|-------|-------------|--------|
| 1 | display | Define o tipo de layout do elemento |
| 2 | flexbox | Sistema de layout unidimensional |
| 3 | grid | Sistema de layout bidimensional |
| 4 | position | Controle de posicionamento |
| 5 | width / height | Dimensões |
| 6 | margin | Espaçamento externo |
| 7 | padding | Espaçamento interno |
| 8 | overflow | Controle de conteúdo excedente |
| 9 | z-index | Controle de camadas |

---

# 📌 5. DISPLAY TYPES

| Ordem | Tipo | Descrição |
|-------|------|------------|
| 1 | block | Ocupa linha inteira |
| 2 | flex | Layout flexível |
| 3 | grid | Layout em grade |
| 4 | inline-block | Mistura inline e block |
| 5 | inline | Apenas conteúdo |
| 6 | none | Remove da renderização |

---

# 📌 6. FLEXBOX 

1. display flex - Ativa o sistema flexível.
2. justify-content - Alinha na horizontal.
3. align-items - Alinha na vertical.
4. flex-direction - Define linha ou coluna.
5. gap - Espaço entre itens.
6. flex-wrap - Permite quebrar linha.
7. align-content - Alinha múltiplas linhas.
8. order - Muda a ordem visual dos itens.

---

# 📌 7. GRID 

1. display grid - Ativa o layout em grade.
2. grid-template-columns - Define as colunas.
3. grid-template-rows - Define as linhas.
4. gap - Espaço entre células.
5. grid-area - Define posição de um item.
6. justify-items - Alinha conteúdo horizontalmente na célula.
7. align-items - Alinha conteúdo verticalmente na célula.

---

# 📌 8. TIPOGRAFIA

| Ordem | Propriedade | Função |
|-------|-------------|--------|
| 1 | font-size | Tamanho da fonte |
| 2 | font-family | Tipo da fonte |
| 3 | line-height | Altura da linha |
| 4 | font-weight | Peso da fonte |
| 5 | text-align | Alinhamento |
| 6 | text-decoration | Decoração |
| 7 | letter-spacing | Espaçamento entre letras |

---

# 📌 9. CORES E APARÊNCIA

| Ordem | Propriedade | Função |
|-------|-------------|--------|
| 1 | color | Cor do texto |
| 2 | background | Fundo |
| 3 | border | Borda |
| 4 | border-radius | Arredondamento |
| 5 | box-shadow | Sombra |
| 6 | opacity | Transparência |

---

# 📌 10. UNIDADES 

| Ordem | Unidade | Tipo |
|-------|----------|------|
| 1 | px | Fixa |
| 2 | % | Relativa ao pai |
| 3 | rem | Relativa ao root |
| 4 | em | Relativa ao elemento |
| 5 | vw | Relativa à largura da tela |
| 6 | vh | Relativa à altura da tela |

---

# 📌 11. PSEUDO-CLASSES 

| Ordem | Tipo | Uso |
|-------|------|------|
| 1 | hover | Interação com mouse |
| 2 | focus | Elemento ativo |
| 3 | active | Clique |
| 4 | nth-child | Elemento específico |
| 5 | first-child | Primeiro elemento |
| 6 | last-child | Último elemento |
| 7 | not | Exclusão |

---

# 📌 12. RESPONSIVIDADE

| Ordem | Conceito | Função |
|-------|------------|--------|
| 1 | Media Queries | Regras por tamanho de tela |
| 2 | Unidades relativas | Layout adaptável |
| 3 | Flexbox | Ajuste automático |
| 4 | Grid | Estrutura adaptável |
| 5 | Mobile First | Estratégia de desenvolvimento |

---

# 📌 13. ANIMAÇÕES E EFEITOS

| Ordem | Propriedade | Função |
|-------|-------------|--------|
| 1 | transition | Transições suaves |
| 2 | transform | Movimentos e escala |
| 3 | animation | Animações completas |
| 4 | keyframes | Etapas da animação |

---

# 📌 14. POSITION 

| Ordem | Tipo | Função |
|-------|------|--------|
| 1 | relative | Base para posicionamento |
| 2 | absolute | Posicionamento livre |
| 3 | fixed | Fixo na tela |
| 4 | sticky | Fixo condicional |
| 5 | static | Padrão |

---

