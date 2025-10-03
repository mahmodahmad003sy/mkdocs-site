# React Integration Demo

This page demonstrates React components integrated into MkDocs.

## Counter Component

Interactive counter built with React:

<div id="react-counter-root"></div>

---

## Todo List Component

A fully functional todo list with React:

<div id="react-todo-root"></div>

---

## How It Works

React is loaded via CDN in `custom_theme/main.html`:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

Components are defined in `custom_theme/assets/javascripts/react-components.js`.

## Adding Your Own Components

1. Edit `custom_theme/assets/javascripts/react-components.js`
2. Create your React component
3. Add a `<div>` with an ID in your markdown
4. Mount the component to that div

Example:

```javascript
// In react-components.js
function MyComponent() {
  return React.createElement("div", null, "Hello from React!");
}

// Mount it
const root = document.getElementById("my-component-root");
if (root) {
  ReactDOM.render(React.createElement(MyComponent), root);
}
```

Then in your markdown:

```markdown
<div id="my-component-root"></div>
```

## Benefits

- ✅ Interactive components
- ✅ No build process needed
- ✅ Works with MkDocs
- ✅ Simple CDN integration
