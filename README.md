# BRTwitchTracker
<img width="100px" src="https://brtwitchtracker.vercel.app/img/logo_vector.960df01a.svg" />

[![GitHub forks](https://img.shields.io/github/forks/luisgbr1el/brtwitchtracker-website?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/network)
[![GitHub stars](https://img.shields.io/github/stars/luisgbr1el/brtwitchtracker-website?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/stargazers)
[![GitHub license](https://img.shields.io/github/license/luisgbr1el/brtwitchtracker-website?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/luisgbr1el/brtwitchtracker-website?style=for-the-badge)](https://github.com/luisgbr1el/brtwitchtracker-website/issues)

Um website estático que mostra os 10 streamers da Twitch PT/BR com mais espectadores no momento, em tempo real.

[Clique aqui](https://brtwitchtracker.vercel.app) para visitar o **BRTwitchTracker**.

## Recursos usados:
<img  alt="Luis-Node" src="https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=node.js&logoColor=white"> <img  alt="Luis-NPM" src="https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=white"> <img  alt="Luis-Vue" src="https://img.shields.io/badge/Vue.js-black?style=for-the-badge&logo=vue.js&logoColor=white"> <img  alt="Luis-JS" src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white"> <img  alt="Luis-HTML" src="https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=html5&logoColor=white"> <img  alt="Luis-CSS" src="https://img.shields.io/badge/CSS-black?style=for-the-badge&logo=css3&logoColor=white">
- Node.js
- Vue.js
- NPM
- JavaScript
- HTML
- CSS


## Build
Você pode compilar esse projeto no seu PC. Para isso, siga os passos:

### 1. Clonando repositório
Primeiramente, você precisa clonar este repositório. Se você estiver usando o **Git**, vá no seu terminal e digite:
```git
git clone https://github.com/luisgbr1el/brtwitchtracker-website.git
```

### 2. Instalando packages
Para que o website compile no seu *localhost*, você precisa instalar os pacotes necessários.

Então assim que a clonagem do repositório finalizar, abra um terminal na pasta `/brtwitchtracker-website` e digite:
```node
npm install
```

### 3. Twitch API
Para que você consiga fazer um `GET Request` da API da **Twitch**, você precisa criar uma aplicação no site do [Twitch Developers](https://dev.twitch.tv). E aí sim, pegar seu `oAuth Token` e o seu `Client Id`.

Com isso, você poderá ir em [src/App.vue](https://github.com/luisgbr1el/brtwitchtracker-website/blob/main/src/App.vue) e inserí-los nos **headers** do *request*, nessa parte do arquivo:
```vue
    const headers = {
      "Authorization": "Bearer <Auth-token>",
      "Client-Id": "<Client-Id>",
    };
```

### 4. Iniciando o servidor
Para iniciar o servidor local de desenvolvimento (*localhost*), você precisa abrir um terminal na pasta do projeto e então...

#### Com o NPM
```node
npm run serve
```

#### Com o Yarn
```node
yarn serve
```

### 5. Pronto!
É isso! Será mostrado no terminal o endereço do *localhost* (a porta vem predefinida como `8080`, mas pode ser alterada).

Agora é só ir em [localhost:8080](http://localhost:8080).

## Contribua
Você pode contribuir com o projeto solicitando um [Pull Request](https://github.com/luisgbr1el/brtwitchtracker-website/pulls). Caso não saiba como solicitar um, siga os passos abaixo:

### 1. Criando um fork
Um *fork* é basicamente a cópia de um repositório, só que sua.

Para criar um clique no botão **Fork**, na parte superior deste repositório:

![image](https://user-images.githubusercontent.com/62726888/155862651-8be8c9c2-437a-4551-a956-ee726c683272.png)

### 2. Clonando o seu fork
Agora, você pode clonar o seu fork para a sua máquina para fazer as mudanças.

Faça isso da forma que achar melhor.

### 3. Faça as suas mudanças
Modifique o código da forma que traga **melhorias** para o projeto. Qualquer *Pull Request* que de alguma forma "avacalhe" com o projeto, será recusado.

### 4. Crie um Pull Request
1. Para realizar um Pull Request, vá na aba de [pulls](https://github.com/luisgbr1el/brtwitchtracker-website/pulls) deste repositório e clique em *New Pull Request*.
2. Selecione **este** repositório como `base` e o seu fork como `compare`.
3. Faça um resumo do que você adicionou ou melhorou no código e clique em *Create Pull Request*.

Sua contribuição será verificada por mim e se estiver tudo certo, você fará parte desse projeto também!

## Autor
[luisgbr1el](https://github.com/luisgbr1el)
