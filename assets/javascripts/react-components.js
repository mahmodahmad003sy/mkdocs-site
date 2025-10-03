// React Components for MkDocs Site

// Simple Counter Component
function Counter() {
  const [count, setCount] = React.useState(0);

  return React.createElement(
    "div",
    {
      className: "react-counter",
      style: { textAlign: "center", padding: "20px" },
    },
    React.createElement("h3", null, "React Counter Demo"),
    React.createElement(
      "div",
      { style: { fontSize: "2rem", margin: "20px 0" } },
      `Count: ${count}`
    ),
    React.createElement(
      "button",
      {
        onClick: () => setCount(count + 1),
        style: {
          padding: "10px 20px",
          margin: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          background: "#667eea",
          color: "white",
          border: "none",
          borderRadius: "5px",
        },
      },
      "Increment"
    ),
    React.createElement(
      "button",
      {
        onClick: () => setCount(count - 1),
        style: {
          padding: "10px 20px",
          margin: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          background: "#764ba2",
          color: "white",
          border: "none",
          borderRadius: "5px",
        },
      },
      "Decrement"
    ),
    React.createElement(
      "button",
      {
        onClick: () => setCount(0),
        style: {
          padding: "10px 20px",
          margin: "5px",
          fontSize: "1rem",
          cursor: "pointer",
          background: "#e53e3e",
          color: "white",
          border: "none",
          borderRadius: "5px",
        },
      },
      "Reset"
    )
  );
}

// Todo List Component
function TodoList() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return React.createElement(
    "div",
    {
      className: "react-todo",
      style: { padding: "20px", maxWidth: "500px", margin: "0 auto" },
    },
    React.createElement("h3", null, "React Todo List"),
    React.createElement(
      "div",
      { style: { display: "flex", gap: "10px", marginBottom: "20px" } },
      React.createElement("input", {
        type: "text",
        value: input,
        onChange: (e) => setInput(e.target.value),
        onKeyPress: (e) => e.key === "Enter" && addTodo(),
        placeholder: "Add a new todo...",
        style: {
          flex: 1,
          padding: "10px",
          fontSize: "1rem",
          border: "2px solid #667eea",
          borderRadius: "5px",
        },
      }),
      React.createElement(
        "button",
        {
          onClick: addTodo,
          style: {
            padding: "10px 20px",
            fontSize: "1rem",
            background: "#667eea",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          },
        },
        "Add"
      )
    ),
    React.createElement(
      "ul",
      { style: { listStyle: "none", padding: 0 } },
      todos.map((todo) =>
        React.createElement(
          "li",
          {
            key: todo.id,
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              marginBottom: "10px",
              background: "#f7fafc",
              borderRadius: "5px",
              textDecoration: todo.done ? "line-through" : "none",
            },
          },
          React.createElement("input", {
            type: "checkbox",
            checked: todo.done,
            onChange: () => toggleTodo(todo.id),
          }),
          React.createElement("span", { style: { flex: 1 } }, todo.text),
          React.createElement(
            "button",
            {
              onClick: () => deleteTodo(todo.id),
              style: {
                padding: "5px 10px",
                background: "#e53e3e",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              },
            },
            "✕"
          )
        )
      )
    )
  );
}

// Initialize React components when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  // Mount Counter component
  const counterRoot = document.getElementById("react-counter-root");
  if (counterRoot) {
    ReactDOM.render(React.createElement(Counter), counterRoot);
  }

  // Mount Todo List component
  const todoRoot = document.getElementById("react-todo-root");
  if (todoRoot) {
    ReactDOM.render(React.createElement(TodoList), todoRoot);
  }
});
