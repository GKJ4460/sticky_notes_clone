import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Noteholder from './components/Noteholder';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Noteholder />
    </div>
  );
}

export default App;
