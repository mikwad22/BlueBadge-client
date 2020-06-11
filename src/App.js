import React, {useEffect, useState} from 'react';
import Sitebar from './components/home/Navbar';
import Auth from './components/auth/Auth';
import MoodIndex from './components/moods/MoodIndex';


function App() {
  const [sessionToken, setSessionToken] = useState('');

useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, [])

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}

const clearToken = () => {
  localStorage.clear();
  setSessionToken('');
}

const protectViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <MoodIndex token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return (
    <div>
      <Sitebar clickLogout={clearToken}/>
      {protectViews()}
    </div>
  );
}

export default App;
