import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppName from "./components/AppName";
import AddTO from "./components/AddTo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/03/2026",
    },
    {
      name: "Go To College",
      dueDate: "05/03/2026",
    },
  ];

  return (
    <center className="todo-content">
      <AppName />
      <AddTO />

      <TodoItems todoItems={todoItems} />

      {/* 
      <div className="col-2">
        <button
          type="button"
          className="btn kg-button btn-danger mb-3"
        >
          DELETE
        </button>
      </div>
      */}
    </center>
  );
}

export default App;