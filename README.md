# Portafolio profesional

El proyecto esta desplegado en [https://lgzarturo.com](https://lgzarturo.com), forma parte de mi perfil profesional como desarrollador fullstack.

## Vite

> El proyecto se migro a Vite + React + TypeScript Setup

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

### Estructura del proyecto

- dist: Es la carpeta donde se genera el código optimizado para el despliegue.
- src: Es la carpeta raíz del proyecto, aquí vive el código fuente.
  - assets: En está carpeta se ponen los recursos estáticos de la aplicación.
  - components: Aquí se definen los componentes.
    - pages: Para el router de React se usa está carpeta para las páginas de la aplicación.

### Ejecutar el proyecto

> Para clonar el proyecto: `git clone git@github.com:lgzarturo/my-portfolio.git`, se puede hacer un fork del proyecto para hacer uso del código o ejecutarlo de forma local.

1. Primero es necesario hacer un clone del repositorio.
2. Con `cd {carpeta}` se accede al proyecto.
3. Ahora solo es necesario ejecutar el comando: `npm install`, para descargar todas las dependencias.
4. Para correr el proyecto usar el siguiente comando: `npm run dev`

### Comandos disponibles

- `npm run dev`: Ejecutar el proyecto de forma local.
- `npm run build`: Compilar el proyecto para generar el paquete optimizado para el despliegue.
- `npm run preview`: El comando arrancará el servidor web estático local y se despliega de forma local el contenido de la capeta 'dist'.

## Linter para Vite y TypeScript

> El proyecto incluye: eslint, eslint-airbnb-config, prettier

1.- Instalar el Linter.

```bash
npm install --save-dev --save-exact eslint
```

2.- Configurar eslint `npx eslint --init`

```bash
npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
  @eslint/create-config@0.4.1
Ok to proceed? (y) y
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

3.- Instar plugin de [airbnb javascript style guide](https://airbnb.io/javascript/react/)

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

4.- Instalar dependencias de airbnb con eslint para TypeScript.

```bash
npm install --save-dev eslint-config-airbnb-typescript
```

5.- Instalar [prettier](https://prettier.io) con soporte para eslint

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

> Commit [1557ae8](https://github.com/lgzarturo/my-portfolio/commit/1557ae838e54127973ad8570d6400e32bacd4314) con los cambios necesarios para configurar el linter y prettier.

## Instalar entorno de pruebas con Vitest

```bash
npm install --save-dev vitest
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## Uso de API's

- Dev.to public api [https://dev.to/api/articles?username=lgzarturo](https://dev.to/api/articles?username=lgzarturo)
- GitHub API [https://api.github.com/users/lgzarturo](https://api.github.com/users/lgzarturo)

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
