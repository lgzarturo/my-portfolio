# Portafolio profesional

## Dependencias del proyecto

### Instalar React
```bash
npm init -y
npm install --save-dev --save-exact webpack webpack-cli
npm install --save-exact react react-dom
```

### Integrando Babel

> El Objetivo es transpilar el código de JavaScript moderno por un código más estandarizado y optimizado para ponerlo en producción.

```bash
npm install --save-exact --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
```

### Librerías de soporte

> Permite a webpack mostrar los recursos estáticos y documentos html, se agrega el soporte de CSS y de twitter bootstrap.

```bash
npm install --save-exact --save-dev html-webpack-plugin
npm install --save-exact --save-dev webpack-dev-server
npm install --save-exact --save-dev bootstrap
npm install --save-exact --save-dev css-loader style-loader
```
