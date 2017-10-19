# README

## Suggestion

Install [eslint](https://eslint.org/) and [airbnb rule](https://www.npmjs.com/package/eslint-config-airbnb) globally first

```command
npm i -g eslint eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react
```

```
starter
|- .eslintrc
|- .gitignore
|- package-lock.json
|- package.json
|- README.md
|- webpack.config.js
|- /src
  |- /js
    |- app.js
  |- /scss
    |- /partials
      |- _normalize.scss
      |- _variables.scss
    |- style.scss
  |- index.html
```

*Delete _normalize.scss if you don't need it.*

## Usage

```command
npm install
```

Run code on local web server by [webpack](https://webpack.js.org/)

```command
npm start
```

## Build

```command
npm run build
```

```
starter
|- .eslintrc
|- .gitignore
|- package-lock.json
|- package.json
|- README.md
|- webpack.config.js
|- /src
  |- /js
    |- app.js
  |- /scss
    |- /partials
      |- _normalize.scss
      |- _variables.scss
    |- style.scss
  |- index.html
|- /public
  |- /dist
    |- App.bundle.js
    |- App.bundle.js.map
    |- style.css
    |- style.css.map
  |- index.html
```
