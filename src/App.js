
import './App.css';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/ui/DarkModeToggle';
import PatientList from './PatientList';
import Table from './Table';

function App() {
  return (
    
    
      <div className="App">
        <header className="App-header">
          <Navbar/>
        
          
          <PatientList/>
          {/* <Table/> */}
        </header>
      </div>
   
    
  );
}

export default App;
