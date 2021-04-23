import './App.css';
import DateComponent from './components/DateComponent';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        <DateComponent fecha="22/5/2021"  />

        
        <DateComponent fecha="22/6/2021"  />

      </header>
    </div>
  );
}

export default App;
