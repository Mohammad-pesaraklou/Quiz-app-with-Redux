import React from "react";
import ReactDOM from "react-dom/client";
// Root style
import "./index.css";
// component
import App from "./App";
import { Provider } from "react-redux";
// store
import { store } from "./Redux/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
