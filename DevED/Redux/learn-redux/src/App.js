import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,islogged} from './actions';
function App() {
  const counter=useSelector(state=>state.counterReducer)
  const isLogged=useSelector(state=>state.loggedReducer)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(2))}>-</button>
      { isLogged? <h3>Valuable infromation that see only log in people!I am awesome!</h3> : ""}
      <button onClick={()=>dispatch(islogged())}>Dont touch!</button>
    </div>
  );
}

export default App;
