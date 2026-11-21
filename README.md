# Receitas de Programação Web

Repositório destinado às atividades e aos exercícios da disciplina de Programação Web.

## Receitas

### HTML e CSS
- [Receita 1](receita1/)
- [Receita 2](receita2/)
- [Receita 3](receita3/)
- [Receita 4](receita4/)
- [Receita 5](receita5/)
- [Receita 6](receita6/)
- [Receita 7](receita7/)
- [Receita 8](receita8/)

### React
- [Receitas 9 a 12](react_example/)

### Next.js
- [Receitas 13 a 21](next0/)

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- React
- Next.js
- Supabase

## Como executar o projeto Next.js

No terminal, acesse a pasta `next0` e execute:

```bash
npm install
npm run dev
```

Depois, acesse http://localhost:3000 no navegador.

Para gerar a versão de produção:

```bash
npm run build
```

Para executar a versão compilada:

```bash
npm run start
```

## Estrutura geral do projeto

```text
receitas-programacao-web/
│
├── receita1/
├── receita2/
├── receita3/
├── receita4/
├── receita5/
├── receita6/
├── receita7/
├── receita8/
│
├── react_example/
│   ├── libs/
│   │   ├── babel.js
│   │   ├── react.js
│   │   └── react-dom.js
│   ├── receita9.html
│   ├── receita10.html
│   ├── receita11.html
│   └── receita12.html
│
├── next0/
│   ├── app/
│   │   ├── actions/
│   │   │   └── movieActions.js
│   │   ├── api/
│   │   │   ├── movies/
│   │   │   │   └── route.js
│   │   │   └── searchMovies/
│   │   │       └── route.js
│   │   ├── clientMovies1/
│   │   │   └── page.js
│   │   ├── clientMovies2/
│   │   │   └── page.js
│   │   ├── clientServerMovies/
│   │   │   └── page.js
│   │   ├── movie/
│   │   │   └── [id]/
│   │   │       ├── page.js
│   │   │       └── loading.js
│   │   ├── movieSearch/
│   │   │   ├── FormularioPesquisa.js
│   │   │   └── page.js
│   │   ├── movies/
│   │   │   ├── layout.js
│   │   │   └── page.js
│   │   ├── novarota/
│   │   │   ├── componentes.js
│   │   │   ├── layout.js
│   │   │   ├── page.js
│   │   │   └── sobre/
│   │   │       └── page.js
│   │   ├── rota1/
│   │   │   └── page.js
│   │   ├── Componentes.js
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── lib/
│   │   └── supabase.js
│   ├── next.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── estilo.css
├── index.html
└── README.md
```

*Observação: a estrutura acima destaca os principais arquivos e diretórios relacionados às receitas. Arquivos auxiliares e configurações adicionais podem existir no projeto.*


---
