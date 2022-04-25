import { BrowserRouter as Router } from 'react-router-dom';  //OBS skal hedde BrowserRouter as Router 
import './App.scss';
import { Nav, NavModal } from './components/Nav/Navigation';
import AppRouter from './components/AppRouter/AppRouter';
import { useState } from 'react';
import NavButton from './components/navbutton/NavButton';

function App() {
  const [ show, setShow ] = useState(false);

  return (
    <div className="App">
      {/* Router kommer fra  React router dom */}
      <Router>
        {/* AppRouter styrer alt indhold på siden */}
        <AppRouter /> 
        {/* Nav styrer navigationen */}{/* Nav står under AppRouter for at få menuen i bunden af appen */}
       

        <button onClick={() => setShow(true)}>Show Modal</button>
        <NavModal onClose={() => setShow(false)} show={show}/>

      </Router>
      <NavButton/>
    </div>
  );
}

export default App;
