import logo from './logo.svg';
import './App.css';

const hello_world = "Oliver Twist - 5hrs 39min";

function text_output(text) {
  return (
    <div>
      <a>{hello_world}</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to make a book database with React
          {text_output(hello_world)}
        </a>
      </header>
    </div>
  );
}

export default App;
