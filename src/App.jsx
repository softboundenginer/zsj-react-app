import logo from "./logo.svg";
import "./App.css";
import Total from "./components/Total/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React案例 --&gt;</p>
      </header>
      <div
        style={{
          flex: 1,
          background: "#282c34",
          color: "#fff",
        }}
      >
        <Total />
      </div>
    </div>
  );
}

export default App;
