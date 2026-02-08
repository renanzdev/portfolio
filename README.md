# Portfólio de Renan Rodríguez

[![Licença](https://img.shields.io/badge/licen%C3%A7a-Custom-blue)](LICENSE.md)

Este é o repositório do meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e experiência como desenvolvedor Full-stack.

**URLs:**

- [https://renandev.com](https://renandev.com)
- [https://renandev.com/projects](https://renandev.com/projects)

## Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

- **Framework:** [Next.js](https://nextjs.org/) (v15.5.3)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (v5.9.2)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) (v4.1.13) com `tailwindcss-animate`
- **Componentes UI:** Componentes customizados e primitivos do [Radix UI](https://www.radix-ui.com/)
- **Animações:** [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) (latest)
- **Formulários:** [React Hook Form](https://react-hook-form.com/) (v7.63.0) com validação de schema utilizando [Zod](https://zod.dev/) (v4.1.11)
- **SEO:** Dados estruturados (JSON-LD) para melhor indexação em motores de busca.

## Estrutura do Projeto

O projeto segue a estrutura de diretórios do Next.js App Router:

```
/
├── app/                # Rotas e layouts da aplicação
├── components/         # Componentes React reutilizáveis
├── hooks/              # Hooks customizados
├── lib/                # Funções utilitárias
├── public/             # Arquivos estáticos (imagens, fontes, etc.)
└── ...
```

## Instalação e Execução Local

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/renanzdev/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   pnpm dev
   ```

4. **Abra o navegador:**
   Acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

## Licença

O código deste repositório está sob uma licença customizada que permite o uso apenas para fins de estudo. É proibida a cópia, distribuição ou utilização em projetos comerciais ou pessoais sem autorização prévia. Consulte o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
