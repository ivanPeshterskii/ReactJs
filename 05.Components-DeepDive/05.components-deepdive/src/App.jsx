import './App.css'
import Calendar from './components/Calendar';
import Counter from './components/Counter';
import Movies from './components/Movies';
import Timer from './components/Timer';
import Typer from './components/Typer';

function App() {

  return (
    <div>

      <h1>Components Deep Dive</h1>

      <Timer />

      <Counter />

      <Calendar />

      <Movies />

      <Typer />


    </div>
  );
}

export default App
