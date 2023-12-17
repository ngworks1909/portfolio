import './App.css';
import Home from './components/Home';
import {useState,useEffect} from 'react';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import FirstLoader from './components/FirstLoader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    
     <Router>
        <Routes>
            <Route exact path='/'  Component={loading?FirstLoader:Home}></Route>
        </Routes>
     </Router>
    </>
  );
}

export default App;
