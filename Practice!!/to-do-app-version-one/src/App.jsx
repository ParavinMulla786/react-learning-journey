import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppName from "./components/AppName";
import AddTO from "./components/AddTo";

function App() {
  return (
    <center className="todo-content">
      <AppName />
      <AddTO />

      <div className="container text-center">

        <div className="row kg-row">
          <div className="col-4">Buy Milk</div>

          <div className="col-4">12/02/2026</div>

          <div className="col-2">
            <button
              type="button"
              className="btn  .kg-button btn-danger mb-3"
            >
              DELETE
            </button>
          </div>
        </div>

      </div>
    </center>
  );
}

export default App;