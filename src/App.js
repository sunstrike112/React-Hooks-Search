import React, {useState} from 'react';
import './App.css';

import LoginForm from './components/LoginForm'
import SearchPage from './components/SearchPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogIn = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className="App">
      {
        isLoggedIn ?
            <SearchPage/>
          :
            <LoginForm isLoggedIn={isLoggedIn} handleLogIn={handleLogIn}/>
      }
    </div>
  );
}

export default App;
