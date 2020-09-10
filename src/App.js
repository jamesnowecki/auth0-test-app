import React from 'react';
import './App.css';
import Button from "./components/Button"
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from "./components/Profile"

function App() {
  return (
    <>
    <Button />
    <LogoutButton />
    <Profile />
    </>
  );
}

export default App;
