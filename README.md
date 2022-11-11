# Portafolio profesional

## Vite

El proyecto se migro a Vite y TypeScript

### Dependencias

```json
"@types/react": "^18.0.24",
"@types/react-dom": "^18.0.8",
"@vitejs/plugin-react": "^2.2.0",
"typescript": "^4.6.4",
"vite": "^3.2.3",
"react": "^18.2.0",
"react-dom": "^18.2.0",
```

## Proyecto de react desde Cero

Para generar un proyecto con React y Webpack, se pueden requieren las siguientes dependencias.

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
