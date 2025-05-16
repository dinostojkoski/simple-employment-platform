import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const linkClass = ({ isActive }) => isActive ? 
  'bg-white hover:bg-gray-100 text-gray-800 font-bold rounded-md px-3 py-2 transition ease-linear duration-400' : 
  'text-white hover:bg-gray-100 hover:text-gray-800 font-bold rounded-md px-3 py-2 transition ease-linear duration-400'

  return (
    <nav className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">Interscend</span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}>
                  Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}>
                  Internships
                </NavLink>
                <NavLink
                  to="/add-job"
                  className={linkClass}>
                  Add Internship
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar