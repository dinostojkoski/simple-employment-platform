import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={ <MainLayout></MainLayout> }>
    <Route index element={ <HomePage></HomePage> }></Route>
    <Route path='/jobs' element={<JobsPage></JobsPage>}></Route>
    <Route path='/add-job' element={<AddJobPage></AddJobPage>}></Route>
    <Route path='/jobs/:id' element={<JobPage></JobPage>} loader={jobLoader}></Route>
    <Route path='/jobs-edit/:id' element={<EditJobPage></EditJobPage>} loader={jobLoader}></Route>
    <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
  </Route>
));

const App = () => {
  return <RouterProvider router={router} ></RouterProvider>;
}

export default App