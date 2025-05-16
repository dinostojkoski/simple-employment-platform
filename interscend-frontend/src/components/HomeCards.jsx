import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our Internships and start your career today
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition ease-linear duration-400">
              Browse Internships
            </Link>
          </Card>
          <Card bg='bg-blue-100'>
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List an Internship to find the perfect candidate for the role
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition ease-linear duration-400">
              Add Internship
            </Link>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HomeCards