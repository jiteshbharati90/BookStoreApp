import React from 'react'
import Home from './home/Home';
import { Route, Routes} from "react-router-dom"
import Courses from './courses/Courses';
import Login from './component/Login';
import Signup from './component/Signup';
import Contact from './component/Contact';
import Contacts from './component/contacts/Contacts';
import Abouts from './component/abouts/Abouts';

function App() {
  return (
    <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Courses/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contacts/>}/>
      <Route path="/About" element={<Abouts/>}/>
    </Routes>
  </div>
    </>
  );
}

export default App
