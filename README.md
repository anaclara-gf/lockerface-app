<div align="center">
  <h1>LockerFace App</h1>
</div>

LockerFace é um aplicativo a ser utilizado em lockers empresariais para desbloqueio de armários por meio de autenticação facial. 

Foi usado [**React Native**](https://reactnative.dev/) como framework JavaScript para escrever esse projeto. 

<p align="center">
 <a href="#pre-requisitos">Pré-requisitos</a> •
 <a href="#instalacao">Instalação</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#creditos">Créditos</a>
</p>

## Pré-requisitos 

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Expo](https://docs.expo.io/). 

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e o aplicativo do Expo baixado no celular para conseguir visualizar o projeto (caso não seja possível, você pode baixar o [AndroidStudio](https://developer.android.com/studio/run/emulator) e usar o emulador do Android no seu computador Windows).

## Instalação

1. Clonar o repositório na sua máquina

2. Instalar as dependências com `npm install`

3. Criar um serviço na [Azure](https://portal.azure.com/) de autenticação visual (Cognitive Services -> Face)

4. Criar um arquivo .env na raíz do projeto no qual você irá colocar o endpoint e a senha oferecidas pela Azure
```JavaScript
AZURE_URL=seu-endpoint-aqui
AZURE_PASSWORD=sua-senha-aqui
```

5. Iniciar o projeto com `expo start`

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo](https://expo.io/)
- [React Native](https://reactnative.dev/)
- [Azure](https://portal.azure.com/)

## Créditos

Esse projeto é baseado na aplicação web LockerFace disponível [neste](https://github.com/anaclara-gf/TF005-Avanade) repositório. 

Foi adaptado para o React Native por [Ana Clara Garcia Farah](https://github.com/anaclara-gf)
