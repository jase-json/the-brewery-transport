
import './App.css';
import snowFlake from '../src/assets/snow.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>The Brewery Transport</div>
        <img className="snow-logo" alt="snowflake" src={snowFlake} />
      </header>
      <body className="game">
        <div className="grid-container">
          <div className="grid-row-one">
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
          </div>
          <div className="grid-row-two">
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
            <div className="grid-item">+</div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
