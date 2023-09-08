# React Intro 9/8/2023

### What is React?

- creates UX/UI (user experience and user interface)
- JavaScript library
  - collection of code snippets called node_modules
- package manager - software that organizes node_modules
  - yarn - package manager
- scalable - ability to grow an application

### Components

- Components are function
- Functions are reusable
- UX/UI

### Virtual DOM

- page reloads are expensive, not scalable
- DOM - document object model -> document.getElementByID, visual representation of the markup code
- Virtual DOM listening for changes and isolating where the change takes place
  - HTML tags (or elements) through the lens of the DOM -> nodes
  - updates the node that requires a change

### React Component

- components are function that return markup
- component names are PascalCase
- the markup is called JSX - combo of HTML and JS
- component call -> `<App />`
- SPA - single page application
- Fragment - wraps multiple tags but doesn't add a node to the DOM tree <></>

### Error

- Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
