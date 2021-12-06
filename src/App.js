
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { TODOS } from "./components/Todos";
import { TODOB } from "./components/Todos2";
import { decCounter, incCounter } from './stores/action';
import { store } from './stores/store';




function App() {
  const dispatch = useDispatch();
  const count = useSelector(store => store.count);
  
  console.log(store.getState())
  return (
    <div className="App">
      <h1>COUNT : {count}</h1>
      <button 
        onClick ={ () => {
          dispatch(incCounter(2))
        }}
      >ADD</button>
      <button
      onClick = { () => {
        dispatch(decCounter(1));
      }}
      >SUB</button>
      <div>
        <TODOS></TODOS>
      </div>
      <hr></hr>
      <div>
       
      </div>
    </div>
  );
}

export default App;
