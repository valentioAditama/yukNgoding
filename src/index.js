import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";

// Router Pages 
// Auth
import Login from './routes/auth/Login';

// User
import LandingPage from './routes/user/LandingPage/LandingPage';
import Home from './routes/user/Home/Home';
import Menu from './routes/user/Menu/Menu';
import Register from './routes/auth/Register';
import Category from './routes/user/category/Category.';
import Criticism from './routes/user/criticism/Criticism';
import News from './routes/user/news/News';
import SubCategory from './routes/user/subCategory/SubCategory'; 
import Articel from './routes/user/Articel/Articel';

// Admin 
import Dashboard from './routes/admin/dashboard/Dashboard';
import User from './routes/admin/users/Users';
import AdminCriticism from './routes/admin/criticism/AdminCriticism';
import AdminNews from "./routes/admin/news/AdminNews";
import Postingan from './routes/admin/postingan/Postingan';


const router = createBrowserRouter([
  { path: '/', element: <LandingPage />},
  { path: '/login', element: <Login /> } ,
  { path: '/register', element: <Register /> },
  { path: '/home', element: <Home />}, 
  { path: '/menu', element: <Menu />},
  { path: '/category', element: <Category /> },
  { path: '/criticism', element: <Criticism />},
  { path: '/news', element: <News /> },
  { path: '/SubCategory', element: <SubCategory /> }, 
  { path: '/articel', element: <Articel />},
  { path: '/admin/dashboard', element: <Dashboard />},
  { path: '/admin/users', element: <User />},
  { path: '/admin/criticism', element: <AdminCriticism />},
  { path: '/admin/news', element: <AdminNews />},
  { path: '/admin/postingan', element: <Postingan />}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
