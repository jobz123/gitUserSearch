import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import BtnToggle from './Components/BtnToggle/BtnToggle';
import SearchBar from './Components/SearchBar/SearchBar';
import Content from './Components/Content/Content';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <div className='header'>
          <h1>devfinder</h1>
          <BtnToggle />
        </div>
        <SearchBar />
        <Content />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
