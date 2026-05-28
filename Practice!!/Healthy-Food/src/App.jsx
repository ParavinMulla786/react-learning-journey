import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fooditem from './components/Fooditem';
import ErrorMSG from './components/ErrorMSG';

function App() {

  let fooditems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <>
      <h1>Healthy Food</h1>

      <ErrorMSG  items = {fooditems} />
      <Fooditem items = {fooditems} />
    </>
  )
}

export default App