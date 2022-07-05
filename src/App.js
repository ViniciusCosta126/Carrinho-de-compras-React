import Item from "./components/item";
import Totais from "./components/total";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Totais />
      <Item />
    </div>
  );
}
