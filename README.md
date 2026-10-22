# React Components Checkpoint

A single product card by Marvin for the GoMyCode React Components and JSX checkpoint. Created with Create React App; uses React Bootstrap.

## Run in VS Code
1. Download the repository ZIP and extract it.
2. Open the extracted folder containing package.json in VS Code.
3. Choose Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm start` and open the local address shown in the terminal.

Use `npm run build` for a production build. This React project runs through npm, not Live Server.

## Required files
- src/App.js: root component, React Bootstrap Card, component composition, and conditional greeting.
- src/product.js: exported product object with name, price, description, and image path.
- src/Name.js: imports product and displays its name.
- src/Price.js: imports product and displays its price.
- src/Description.js: imports product and displays its description.
- src/Image.js: imports product and displays its image with alternative text.
- src/App.css: styling with a stacked layout on small screens.
- src/assets/: bundled local product and welcome illustrations.
- src/index.js: Bootstrap CSS import and React rendering.

## Change the name
At the top of src/App.js, find `const firstName = "Marvin";`.
- A non-empty name displays Hello, Marvin! (or your chosen name) and a welcome image.
- Change it to `const firstName = "";` to display Hello, there! with no welcome image.
- Whitespace-only names also use the fallback greeting.

The welcome image is conditional. The product image remains visible in both cases.

## Product data
Edit src/product.js to change all four product components from one place. product.js is a JavaScript module containing a JSON-style object, not a separate .json file. Its image property points to an imported local SVG asset.

## Setup used
`npx create-react-app@5.1.0 react-components-checkpoint --use-npm`

`npm install react-bootstrap@2.10.10 bootstrap@5.3.8`

Create React App is used to match this assignment, although it is deprecated for new general-purpose projects.

Prepared with ChatGPT/Codex assistance. This is a product display, not a working online shop.
