import React from 'react'
import Cards from "./Card"
import list from "../../public/list.json"
import Card from './Card'
import { Link } from 'react-router-dom'


function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-16 py-8  items-center justify-center text-center'>
    <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :</span></h1>
    <p className='mt-4'>A deep dive into the world of science fiction, exploring futuristic societies and the ethical dilemmas they face.</p>
   <Link to="/">
   <button className= 'bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
    </Link > 
   </div>
   <div className='mt-12 grid grid-cols-4 '>
     {
      list.map((item)=>(
        <Card key = {item.id} item={item}/>
      ))
     }

   </div>
    </div>
   
   </>
  )
}

export default Course
