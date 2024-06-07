import logo from "./logo.svg";
import "./App.css";
import Total from "./components/Total/index";
import MyNavLink from "./components/MyNavLink/index";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>
          <MyNavLink to="/total">React案例 --&gt;</MyNavLink>
        </span>
      </header>
      <div
        style={{
          flex: 1,
          background: "#282c34",
          color: "#fff",
        }}
      >
        <Route path="/total" component={Total}></Route>
      </div>
    </div>
  );
}

export default App;
