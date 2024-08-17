import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './components/Routes/Route.jsx';
import Home from './components/Home/Home.jsx';

import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import JobDetails from './components/JobsDetails/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Route></Route>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json')
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader : ()=> fetch('../jobs.json')

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
