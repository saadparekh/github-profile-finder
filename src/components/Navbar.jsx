import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between">
    <h2 className="text-xl font-bold text-blue-600">GitHub Analyzer</h2>
    <div>
      <Link to="/" className="mx-2 text-gray-700 hover:text-blue-600">Home</Link>
      <Link to="/about" className="mx-2 text-gray-700 hover:text-blue-600">About</Link>
    </div>
  </nav>
)

export default Navbar
