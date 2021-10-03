import React from 'react';
import './App.css';
import Header from './components/Header';
import Mainstory from './components/Mainstory';
import Notifications from './components/Notifications';


function App() {
  return (
    <div className="app">
    <Header />  
    <Notifications topic="PÄIVÄN TIMANTTI" body="Tutkija kertoo: Näin sota näkyy meissä edelleen" /> 
    <Notifications topic="PÄIVÄN TIMANTTI" body="Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa"/>
    <Notifications topic="MAINOS" body="Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!"/> 
    <Mainstory  />
    
    </div>
  );
}

export default App;
