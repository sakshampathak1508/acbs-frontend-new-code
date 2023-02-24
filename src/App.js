import './App.css';
import Routes from './routes/Routes'
import {React, useState, createContext} from 'react'
import {StateProvider} from './StateProvider'

function App() {


  // Create a function to toggle the loading value

  return (
    <StateProvider>
    <Routes/>
    </StateProvider>
  )}

export default App;
