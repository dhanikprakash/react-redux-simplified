
import './App.css';
import { createStore } from 'redux'

const counterReducer = (state =0, action) => {
  console.log(`current state ${state} action ${action.type}`);
  switch(action.type){
    case 'INCREMENT':
       return state + 1;
    case 'DECREMENT':
      return state -1;
    case 'RESET': 
       return 0;
       default:
         return state;
  }
}
const store = createStore(counterReducer);

function App() {
  console.log('Rendering...');
  return (
    <>
    <div className="App">
      <div>
      </div>
          <button onClick={ e => store.dispatch({type: 'INCREMENT'})} >Plus</button>
          <button onClick={ e => store.dispatch({type: 'DECREMENT'})} >minues</button>
          <button onClick={ e => store.dispatch({type: 'RESET'})} >Reset</button>
    </div>
    </>
  )
}

store.subscribe(() => console.log(store.getState()));

export default App;
