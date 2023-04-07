import React, { useEffect } from 'react';
import './App.css'
import {action,Comedy,Horror,originals} from './urls'
import axios  from'./Components/constants/axios'
import './Components/NavBar/NavBar.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  useEffect(() => {
  
    return () => {
      axios.get()
    }
  }, [])
  
  
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title="Netflix Originals"/>
     <RowPost url={action} title="Action" isSmall/>
     <RowPost url={Horror} title ="Horror" isSmall/>
     <RowPost url={Comedy} title ="Comedy" isSmall/>
    </div>
  );
}

export default App;
