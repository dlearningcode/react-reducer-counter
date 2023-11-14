import './App.css';
import CounterProvider from './providers/CounterProvider';
import Counter from './components/CounterDisplay';
import PlusButton from './components/PlusButton';
import MinusButton from './components/MinusButton';
import ResetButton from './components/ResetButton';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <header className="App-header">
          <h1>React Reducer Counter</h1>
          <Counter />
          <PlusButton />
          <MinusButton />
          <ResetButton />
        </header>
      </CounterProvider>
    </div>
  );
}

export default App;
