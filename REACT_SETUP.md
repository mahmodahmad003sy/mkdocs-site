# React Integration Guide

## What Was Added

### 1. React CDN Scripts

Added to `custom_theme/main.html`:

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.production.min.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
></script>
```

### 2. React Components File

Created `custom_theme/assets/javascripts/react-components.js` with:

- **Counter Component**: Interactive counter with increment/decrement
- **Todo List Component**: Fully functional todo list

### 3. Demo Page

Created `docs/react-demo.md` showing React components in action.

## How to Use

### Method 1: Use Existing Components

Add to any markdown file:

```markdown
# My Page

<div id="react-counter-root"></div>

<div id="react-todo-root"></div>
```

### Method 2: Create Your Own Component

1. Edit `custom_theme/assets/javascripts/react-components.js`

2. Add your component:

```javascript
function MyButton() {
  const [clicked, setClicked] = React.useState(false);

  return React.createElement(
    "button",
    {
      onClick: () => setClicked(!clicked),
      style: {
        padding: "10px 20px",
        background: clicked ? "green" : "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
    },
    clicked ? "Clicked!" : "Click Me"
  );
}

// Mount it
document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("my-button-root");
  if (root) {
    ReactDOM.render(React.createElement(MyButton), root);
  }
});
```

3. Add to your markdown:

```markdown
<div id="my-button-root"></div>
```

## Using JSX (Optional)

If you want to use JSX syntax instead of `React.createElement`:

1. Install Babel standalone:

```html
<!-- Add to custom_theme/main.html -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

2. Use JSX in your script:

```html
<script type="text/babel">
  function MyComponent() {
    return <div>Hello from JSX!</div>;
  }

  ReactDOM.render(<MyComponent />, document.getElementById("root"));
</script>
```

## Examples Included

### Counter Component

```javascript
- Increment button
- Decrement button
- Reset button
- State management with useState
```

### Todo List Component

```javascript
- Add todos
- Toggle completion
- Delete todos
- Input handling
- List rendering
```

## Test It

```bash
mkdocs serve
```

Visit: `http://127.0.0.1:8000/react-demo/`

## Benefits

✅ **No Build Process**: Uses React via CDN  
✅ **Simple Integration**: Just add divs in markdown  
✅ **Interactive**: Full React functionality  
✅ **Fast Development**: Edit and refresh

## File Structure

```
custom_theme/
├── main.html                          # React CDN loaded here
└── assets/
    └── javascripts/
        └── react-components.js        # Your React components

docs/
└── react-demo.md                      # Demo page
```

## Notes

- React runs in production mode (faster, smaller)
- Components use `React.createElement` (no build needed)
- All React 18 features available
- Can use React Hooks (useState, useEffect, etc.)

Enjoy building interactive components! 🚀
