import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Page from "./page";

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
