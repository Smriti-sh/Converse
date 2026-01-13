import React from 'react'
import { Routes,Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import NotificationPage from './pages/NotificationPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import CallPage from './pages/CallPage';
import SignUpPage from './pages/SignUpPage';

import toast, {Toaster} from 'react-hot-toast';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { axiosInstance } from './lib/axios.js';

const App = () => {

  //useQuery send request 3 more times if failed once , so better than useEffect
    const {data, isLoading, error} = useQuery({
      queryKey: ["todos"],

      queryFn: async () => {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
      },
      retry: false, //to stop after 1 try/failure
    });
    console.log({data});
    console.log({isLoading});
    console.log({error});
return(
  <div className='h-screen' data-theme='forest'>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/call' element={<CallPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
        <Route path='/notification' element={<NotificationPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
    </Routes>

    <Toaster/>
  </div>
)
}

export default App;
