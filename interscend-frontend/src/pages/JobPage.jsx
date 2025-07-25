import React from 'react'
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this job?");
        if (confirmDelete) {
            try {
                // Send delete request to the backend
                await fetch(`http://localhost:8080/api/jobs/${id}`, {
                    method: 'DELETE',
                });

                // Redirect to job listings after deletion
                navigate('/jobs');
            } catch (error) {
                console.error("Error deleting job:", error);
            }
        }
    };
    

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                    to="/jobs"
                    className="text-blue-500 hover:text-blue-600 flex items-center">
                    <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Job Listings
                    </Link>
                </div>
                </section>

                <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">{ job.type }</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    { job.title }
                                </h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className='text-lg text-orange-700 mr-2'></FaMapMarker>
                                    <p className="text-orange-700">{ job.location }</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-blue-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">
                                { job.description }
                                </p>

                                <h3 className="text-blue-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{ job.salary } / Year</p>
                            </div>
                        </main>

                        
                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">{ job.company.name }</h2>

                                <p className="my-2">
                                { job.company.description }
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-blue-100 p-2 font-bold">
                                { job.company.contactEmail }
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-blue-100 p-2 font-bold">{ job.company.contactPhone }</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    to={`/jobs-edit/${job.id}`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                                    Edit Job
                                </Link>
                                <button 
                                onClick={handleDelete}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:8080/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader }