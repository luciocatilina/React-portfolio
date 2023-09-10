import logo from './logo.svg';
import './App.css';
import './css/App-header.css'
import './css/App-body.css'
import Menu from './components/menu';

function App() {
  return (
    <div className="App">
      <header >
          <nav className="App-header">
            <h1>Pablo Candia</h1>
            <p>Full stack developer</p>
          </nav>       
      </header>
      <div id="App-body">
        <Menu></Menu>
      </div>
    </div>
  );
}

export default App;
