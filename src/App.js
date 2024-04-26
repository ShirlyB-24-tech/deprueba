import "./App.css";
import Weatherapp from "./Weatherapp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <Weatherapp />
      </header>
      <footer>
        {" "}
        This project was coded by
        <a href="https://github.com/ShirlyB-24-tech/" target="_blank">
          {" "}
          Shirly B.
        </a>
        , is {""}{" "}
        <a
          href="https://github.com/ShirlyB-24-tech/del-Tiempoapp"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and {""}
        <a href="#" target="_blank">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
