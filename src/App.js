import React, {useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  // const [paths, setPaths] = useState([])

  useEffect(function () {
    // console.log(window.fs.statSync)
    // upload({})
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.baidu.com"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
