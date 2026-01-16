import React from 'react'
import { Routes,Route, Navigate } from 'react-router';
import LoginPage from './pages/LoginPage';
import NotificationPage from './pages/NotificationPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import CallPage from './pages/CallPage';
import SignUpPage from './pages/SignUpPage';
import OnboardingPage from './pages/OnboardingPage.jsx'

import toast, {Toaster} from 'react-hot-toast';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { axiosInstance } from './lib/axios.js';

const App = () => {

  //useQuery send request 3 more times if failed once , so better than useEffect
  //this section fetches authenticated user
    const {data:authData, isLoading, error} = useQuery({
      queryKey: ["authUser"],

      queryFn: async () => {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
      },
      retry: false, //to stop after 1 try/failure
    });
    const authUser = authData?.user;

      //BLOCK ROUTING UNTIL AUTH IS READY
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

return(
  <div className='h-screen' data-theme='retro'>
    <Routes>
        <Route path='/' element={ authUser ? <HomePage/> : <Navigate to="/login"/>}/>
        <Route path='/SignUp' element={ !authUser ? <SignUpPage/> : <Navigate to="/"/>}/>
        <Route path='/Login' element={ !authUser ? <LoginPage/> : <Navigate to="/"/>}/>
        <Route path='/notification' element={ authUser ? <NotificationPage/> : <Navigate to="/login"/>}/>
        <Route path='/call' element={ authUser ? <CallPage/> : <Navigate to="/login"/>}/>
        <Route path='/chat' element={ authUser ? <ChatPage/> : <Navigate to="/login"/>}/>
        <Route path='/onboarding' element={ authUser ? <OnboardingPage/> : <Navigate to="/login"/>}/>
    </Routes>

    <Toaster/>
  </div>
)
}

export default App;
