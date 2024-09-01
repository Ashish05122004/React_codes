import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Labs from './components/Labs'
import { NavLink } from 'react-router-dom'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainHeader from './components/MainHeader'
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/Labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Labs" element={<Labs />} />
          <Route path="*" element={<div><h2>Page Not Found</h2></div>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
