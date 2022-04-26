import { BrowserRouter as Router } from 'react-router-dom';  //OBS skal hedde BrowserRouter as Router 
import './App.scss';
import { Nav, NavModal } from './components/Nav/Navigation';
import NavButton from './components/Nav/NavButton';
import Logo from './components/Logo/Logo'
import AppRouter from './components/AppRouter/AppRouter';
import { useState } from 'react';
import HomeLogo from './Svgs/Home.svg'

function App() {
  const [ show, setShow ] = useState(false);

  return (
    <div className="App">
      {/* Router kommer fra  React router dom */}
      <Router>
        {/* AppRouter styrer alt indhold på siden */}
        <AppRouter /> 
        {/* Nav styrer navigationen */}{/* Nav står under AppRouter for at få menuen i bunden af appen */}
        <Logo />
        <NavButton Url={HomeLogo} clickEvent={setShow}/>
        <NavModal onClose={() => setShow(false)} show={show}/>

      </Router>
    </div>
  );
}

export default App;
