import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider è un HOC - Higher Order Component, che riceve lo stato globale, e si occuperà di fornire le logiche per leggere e scrivere nello Store
  // dal nostro componente App e tutti i suoi figli
  <Provider store={store}>
    <App />
  </Provider>
);
