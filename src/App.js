import Checkbox from "./components/Checkbox";
import NewOrder from "./components/NewOrder";
import OrderDetail from "./components/OrderDetail";
import Orders from "./components/Orders";

function App() {
  return (
    <div className="App">
      <Orders />
      <NewOrder />
      <OrderDetail />
      <Checkbox />
    </div>
  );
}

export default App;
