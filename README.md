


<!-- SOBRE O PROJETO -->
## Sobre o projeto

![Captura de Tela 2022-11-26 às 15 51 19](https://user-images.githubusercontent.com/60937919/204105659-70d832b8-010b-4d71-98bd-c7be26fb2841.png)

Um projeto funcional para tentar alertar sobre as pesquisas e notícias falsas. O objetivo desse site é alertar as pessoas sobre onde elas buscam e se as notícias que elas leem. Se são verdadeiras ou estao em lugares confiaveis. Nesse site está sendo usado mecânismo de pesquisa confiavel, mas mesmo assim existem validações para alertar e previnir Fake News.

Estilizado com <a href="https://tailwindcss.com/">Tailwind CSS</a>, totalmente resposivo e programamdo em uma linguagem em alta no mundo, Next.Js <a herf="https://nextjs.org/">Next.js </a> uma framework de React.Js. 

Site do projeto aqui: https://google-clone-p8mn37r8a-cosmicwanderer7.vercel.app/

Por favor não faça SPAM de pesquisas.




### Construido com:


* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Programmable Search Engine](https://programmablesearchengine.google.com/about/)
* [Yarn](https://yarnpkg.com/)


<p align="right">(<a href="#about-the-project">back to top</a>)</p>



<!-- Comece aqui -->
## Comece Aqui



### Pré-Requisitos (Em inglês)

This are things you need to use the web app and how to install them.
* yarn
  ```sh
  npm install --global yarn 
  yarn dev   // to run local server
### Installation



1. Get a free API_KEY at [https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key](https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key)
   Get ( Search engine ID ) CONTEXT_KEY at https://cse.google.com/cse/create/new


3. Clone the repo
   ```sh
   git clone https://github.com/cosmicwanderer7/google-clone.git
   ```
   
4. Add Next
   ```sh
   yarn add next react react-dom
5. Install all dependencies
   ```sh
   yarn 
6. Create a .env.local file to store your api keys
   ```js
   API_KEY = ' ' //API Key  https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
   CONTEXT_KEY = ' ' // Context Key  https://cse.google.com/cse/create/new ( Search engine ID )
7. Use dummy data for testing
  `const  useDummyData  =  false;`
  //true for development testing (mock results) change it in search.js
  (Free version of google search api has a quota of 100 search results per day  use dummy data so that you don't exhaust the quota)
8. To run on local host use
   ```sh
   yarn dev //starts a local server

<p align="right">(<a href="#about-the-project">back to top</a>)</p>


<!-- Contribuições -->
## Contribuições

Esse projeto Open Source, **fique á vontade para contribuir**. De preferência aos frameworks e bibliotecas usadas já no projeto. .

Se você tem alguma contribuição que melhore o projeto, por favor fork o repo e mande um a pull request. 

Não esqueça de dar um 'Star' no projeto! Obrigado!

Como fazer uma contribuição (Em Inglês):

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes 
5. Push to the Branch 
6. Open a Pull Request
