import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Appmname from "./components/Appmname";

function App() {
  return (
    <center class="todo-content">
      <Appmname/>

      <div class="container text-center">
        <div class="row">
          <div class="col-4"><input type="text" placeholder="Enter To-Do HERE"/></div>
          <div class="col-4"><input type="date" /></div>
          <div class="col-2"><button type="button" class="btn btn-success">Success</button></div>
        </div>
        <div class="row">
          <div class="col-4">Buy Milk</div>
          <div class="col-4">12/02/2026</div>
          <div class="col-2"><button type="button" class="btn btn-danger">Danger</button></div>
        </div>
      </div>
    </center>
  );
}

export default App;
