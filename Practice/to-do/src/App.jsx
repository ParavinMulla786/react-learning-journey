import { useState, useReducer } from "react";
import "./App.css";

// Initial State
const initialState = {
  todos: [],
};

// Reducer Function
function reducer(state, action) {

  switch (action.type) {

    // Add Todo
    case "ADD":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    // Delete Todo
    case "DELETE":
      return {
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    // Toggle Complete
    case "TOGGLE":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        ),
      };

    default:
      return state;
  }
}

function App() {

  // useReducer
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Input State
  const [input, setInput] = useState("");

  // Add Todo
  const addTodo = () => {

    if (input === "") return;

    dispatch({
      type: "ADD",
      payload: input,
    });

    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Todo App</h1>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add Button */}
      <button onClick={addTodo}>
        Add
      </button>

      <hr />

      {/* Todo List */}
      {state.todos.map((todo) => (

        <div key={todo.id}>

          {/* Todo Text */}
          <span
            onClick={() =>
              dispatch({
                type: "TOGGLE",
                payload: todo.id,
              })
            }
            style={{
              textDecoration: todo.completed
                ? "line-through"
                : "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            {todo.text}
          </span>

          {/* Delete Button */}
          <button
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: todo.id,
              })
            }
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default App;