import { useState } from 'react';
import './index.css';

import Tour from './components/Tour';
import data from './data';

function App() {

  const [state, setState] = useState(data);

  function remove(id) {
    const newTours = state.filter(
      (items) => items.id !== id
    );

    setState(newTours);
  }

  function refreshTours() {
    setState(data);
  }

  if (state.length === 0) {
    return (
      <div className="refresh-container">

        <h1>No Tours Left</h1>


<button type="button" class="btn btn-primary mt-3"

          onClick={refreshTours}
>Refresh</button>
        
      </div>
    );
  }

  return (
    <div>
      <Tour
        data={state}
        remove={remove}
      />
    </div>
  );
}

export default App;