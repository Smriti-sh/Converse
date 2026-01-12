import React from 'react'
import { Routes,Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import NotificationPage from './pages/NotificationPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import CallPage from './pages/CallPage';
import SignUpPage from './pages/SignUpPage';

import toast, {Toaster} from 'react-hot-toast';

function App() {
  return <div className='h-screen' data-theme='forest'>
    <button onClick={()=>{toast.success("Hello bitches!")}}>Click here</button>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/call' element={<CallPage/>}/>
        <Route path='/chat' element={<ChatPage/>}/>
        <Route path='/notification' element={<NotificationPage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
    </Routes>

    <Toaster/>
  </div>;
}

export default App;