import React from 'react';
import './App.css';
import Button from "./components/Button"
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from "./components/Profile"
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading your data</div>
  return (
    <>
    <Button />
    <LogoutButton />
    <Profile />
    </>
  );
}

export default App;
