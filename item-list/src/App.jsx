import { useState } from 'react'
import './App.css'

function App() {

  // State for input
  const [input, setInput] = useState("");

  // State for items array
  const [items, setItems] = useState([]);

  // Function to add item
  const addItem = () => {

    // Check input is not empty
    if (input.trim() !== "") {

      // Add item to array
      setItems([...items, input]);

      // Clear input field
      setInput("");
    }
  };

  // Function to delete item
  const deleteItem = (indexValue) => {

    const updatedItems = items.filter(
      (_, index) => index !== indexValue
    );

    setItems(updatedItems);
  };

  return (
    <>
      <div className="container">

        <h1>Item List Manager</h1>

        {/* Input Section */}
        <div className="input-section">

          <input
            type="text"
            placeholder="Enter item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addItem}>
            Add Item
          </button>

        </div>

        {/* Total Items */}
        <h3>Total Items: {items.length}</h3>

        {/* Items List */}
        <ul>

          {items.map((item, index) => (

            <li key={index}>

              {item}

              <button
                className="delete-btn"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>

            </li>

          ))}

        </ul>

      </div>
    </>
  )
}

export default App