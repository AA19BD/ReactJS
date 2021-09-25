import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers"
import { Provider } from "react-redux";


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//window.__REDUX....->нужен для использоаваения расширения redux в консоле(можно и без него)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals













// import { createStore } from "redux";

// //STORE->GLOBOLIZED STATE(ALL OF DATA)

// //ACTION->(INCREMENT)
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };
// //REDUCER(CHECKS WHAT TO DO)
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// let store = createStore(counter);

// //DISPLEY store IN THE CONSOLE
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //DISPATH(Execute the action)
// store.dispatch(increment());