import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import College from './Routes/College';
import Admission from './Routes/Admission';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';
import AdmissionForm from './Component/AdmissionForm';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import My_College from './Routes/My_College';
import DetailsCompo from './Component/DetailsCompo';
import NotFound from './Component/NotFound';
import ProfileEdit from './ProfileEdit';
import PrivateRoute from './Routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: 'colleges',
        element:<College></College>
      },
      {
        path: 'mycollege',
        element:<My_College></My_College>
      },
     
      {
        path: 'admission',
        element: <Admission></Admission>
      },
      {
        path: '/details/:id',
        element:<PrivateRoute><DetailsCompo></DetailsCompo></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)


      },
      {
        path: 'admissionform',
        element: <AdmissionForm></AdmissionForm>
      },
      {
        path: 'login',
        element:<Login></Login> 
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'profileedit',
        element: <ProfileEdit></ProfileEdit>
      },

    ]
    

  },
  {
    path: '*',
    element: <NotFound></NotFound>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
 </div>
)
