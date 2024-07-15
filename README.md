## React Project 10

<hr>

#### _**COCKTAILS**_

- Comandos para iniciar el proyecto ...

```shell
>> npm install
>> npm install react-scripts
>> npm update
>> npm audit fix --force
>> npm start
```
- De ser necesario de lo contrario omitir estos pasos 
``` Limpiar la Caché de npm y Reinstalar Dependencias
>> npm cache clean --force
>> rm -rf node_modules
>> rm package-lock.json
>> npm install
```
```Solucionar Dependencias
>> npm install --save react-scripts

```
```  Verificar el Archivo package.json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```
