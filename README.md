# Hotels

App Front-end con APIRest (Angular y Node.js)

## Comenzando

Con estas instrucciones obtendra y ejecutara una copia de la aplicacion en frontend sobre hoteles y su respectiva APIRest, con una capa persistente de datos en MongoDB.

### Prerequisitos

Instalar de Node.js, npm

```
Node.js y NPM -> https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm
```
Instalar y ejecutar mongoDB

```
MongoDB windows -> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
```
```
MongoDB MAC -> https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
```
```
MongoDB Linux -> https://docs.mongodb.com/manual/administration/install-on-linux/
```

Instalar Git
```
GIT -> https://git-scm.com/downloads
```

Clonando Repositorio

Para clonar este repositorio, ubicado en la carpeta donde desea clonar el proyecto, ejecute en la terminal

```
$ git init
$ git clone https://github.com/juanfar/hotels.git
```
```
$ git clone https://github.com/juanfar/hotels.git
```

Se crearan dos carpetas llamadas `API` y `App`


## Paso a Paso

### Importar Base de Datos

ejecute en la terminal

```
mongoimport --db reserve --collection hotels --file data.json
```

### Ejecutar API

Ubicado dentro de la carpeta  `API`, ejecute en la terminal

```
$ npm install
$ npm start
```
Como resultado el servidor debe responder en la terminal  `corriendo en http//localhost:3000`, mantenga esa terminal activa

### Ejecutar App

Ubicado dentro de la carpeta  `App`, ejecute en otra terminal

```
$ npm install
$ npm start
```
Como resultado el servidor debe responder en la terminal `webpack: Compiled successfully.` luego ingresar al navegador y entrar a `http//localhost:4200`, mantenga esa terminal activa.
