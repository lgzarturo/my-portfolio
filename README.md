# Portafolio profesional

## Vite

> El proyecto se migro a Vite y TypeScript

El proyecto esta desplegado en [https://lgzarturo.com](https://lgzarturo.com)

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

## Estructura del proyecto

- dist: Es la carpeta donde se genera el código optimizado para el despliegue.
- src: Es la carpeta raíz del proyecto, aquí vive el código fuente.
  - assets: En está carpeta se ponen los recursos estáticos de la aplicación.
  - components: Aquí se definen los componentes.
    - pages: Para el router de React se usa está carpeta para las páginas de la aplicación.

## Ejecutar el proyecto

> Para clonar el proyecto: `git clone git@github.com:lgzarturo/my-portfolio.git`
> Se puede hacer un fork del proyecto para hacer uso del código o ejecutarlo de forma local.

1. Primero es necesario hacer un clone del repositorio.
2. Con `cd {carpeta}` se accede al proyecto.
3. Ahora solo es necesario ejecutar el comando: `npm install`, para descargar todas las dependencias.
4. Para correr el proyecto usar el siguiente comando: `npm run dev`

### Comandos disponibles:

- `npm run dev`: Ejecutar el proyecto de forma local.
- `npm run build`: Compilar el proyecto para generar el paquete optimizado para el despliegue.
- `npm run preview`: El comando arrancará el servidor web estático local y se despliega de forma local el contenido de la capeta 'dist'.

---

## Proyecto de react desde Cero

Para generar un proyecto con React y Webpack, se pueden requieren las siguientes dependencias.

### Instalar React
```bash
npm init -y
npm install --save-dev --save-exact webpack webpack-cli
npm install --save-exact react react-dom
```

### Integrando Babel

> El Objetivo es generar el código de JavaScript moderno por un código más estandarizado y optimizado para ponerlo en producción.

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
