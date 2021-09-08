import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { bugAdded, bugRemoved, bugResolved } from "./actions";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import reportWebVitals from "./reportWebVitals";

console.log(store.getState());

store.dispatch(bugAdded("bug1"));
store.dispatch(bugAdded("bug3"));
store.dispatch(bugAdded("bug2"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));
store.subscribe(() => console.log("State after dispatch: ", store.getState()));

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
