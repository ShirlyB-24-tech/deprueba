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
        <a
          href="https://github.com/ShirlyB-24-tech/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Shirly B.
        </a>
        , is {""}{" "}
        <a
          href="https://github.com/ShirlyB-24-tech/deprueba"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and {""}
        <a href="https://app.netlify.com" target="_blank" rel="noreferrer">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
