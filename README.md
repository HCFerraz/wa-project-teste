# WK Project
## por Henrique Cabral Ferraz 

### Fluxo do site:
- Ao entrar na home do site, o usuário é apresentado ao WK Project (World Knowledge Project), um quiz de conhecimentos gerais. Para prosseguir, deve-se informar o número de perguntas a serem respondidas (sendo este sempre um número positivo acima de zero). 
- Ao clicar em Avançar, o usuário é levado para a página de confirmação, se clicar em Cancel, retorna para a home; se clicar em Start, ocorre um fetch na API utilizada para captação de perguntas e respostas, bem como uma reestruturação do JSON retornado pela API.
- Na página de quiz, o usuário deve escolher alguma questão para prosseguir. Quando o botão Avançar é clicado, a questão é considerada respondida, sendo informado abaixo a quantidade de acertos, erros e o total de questões.
- Após finalizar o quiz, é exibido os resultados, marcados através de cores contidas na legenda. No primeiro render da página de resultados, os dados são salvos numa chave no local storage do browser utilizado.
- -Ao reacessar o site, é exibido uma nova opção ao usuário: visualizar os resultados anteriores. Trata-se de uma tela simples contendo as informações de Score do usuário. Os dados são captados do local storage.

### Techs

- Vite: para desenvolvimento e produção; 
- Formik: para manipulação de formulários;
- Material UI: para estilização de botões e elementos auxiliares;
- TailwindCSS: para estilização do site, criação de paleta de cores e padrão de design. Escolhido para agilizar o desenvolvimento;
- Axios: para fetch em API's;
- Yup: para controle de dados informados pelo usuário;
- React Router Dom: para manipulação de rotas e histórico do browser;
- Sanitize HTML: para sanitizar o retorno de perguntas e respostas da API.

### Hospedagem e Deploy

- Github/Netlify

### Desenvolvimento

O desenvolvimento levou aproximadamente 14 horas. Tive uma curva de aprendizado ao usar o Formik, (utilizo o React Hook Form). O [TailwindCSS](https://tailwindcss.com/) foi utilizado pois permite um desenvolvimento mais rápido ao utilizar classes utilitárias. Combinado com o plugin [Autoprefixer](https://autoprefixer.github.io/) do [PostCSS](https://postcss.org/), é gerado um CSS Cross Browser, fazendo com que a aplicação mantenha uma consistência de design na maioria dos browsers. O [Vite](https://vitejs.dev/guide/why.html#the-problems) foi utilizado pois permite uma experiência de desenvolvimento aprimorada em relação ao CRA, sendo mais rápido tanto lidar com dependência (graças ao Esbuild), quanto para atualização dos módulos com o uso do HMR (Hot Module Replacement).