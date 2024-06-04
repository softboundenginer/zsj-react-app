import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/index";
import List from "./components/List/index";
import Footer from "./components/Footer/index";

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
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
