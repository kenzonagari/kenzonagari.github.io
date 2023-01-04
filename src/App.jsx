import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx'
import Statement from './components/Statement.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Statement />
        <Projects />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
