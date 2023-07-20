import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../src/store/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
);
