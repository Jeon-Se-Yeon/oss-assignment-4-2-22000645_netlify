import logo from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-logo" href="https://www.lovelive-anime.jp/"><img src={logo} className="App-logo" alt="logo"/></a>
        <p className="App-text">
          Click the image!!!
        </p>
      </header>
    </div>
  );
}

export default App;
