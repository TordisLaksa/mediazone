import { BrowserRouter as Router } from 'react-router-dom';  //OBS skal hedde BrowserRouter as Router 
import './App.scss';
<<<<<<< HEAD
import { Nav } from './Assets/Data/Navigation';
import AppRouter from './components/AppRouter/AppRouter';
=======
>>>>>>> fe850e15a22ab8cea2ab57bfdeae6ceb303e6ac4

function App() {
  return (
    <div className="App">
      {/* Router kommer fra  React router dom */}
      <Router>
        {/* AppRouter styrer alt indhold på siden */}
        <AppRouter /> 
        {/* Nav styrer navigationen */}{/* Nav står under AppRouter for at få menuen i bunden af appen */}
        <Nav />
      </Router>
    </div>
  );
}

export default App;
