import React from 'react'
import CreateBlog from './component/CreateBlog'
import Blog from './component/Blog'

function Home() {
  return (
      <div className="sm:w-[100%] 2xl:w-[60rem] m-auto static">
        <div className=" items-center bg-zinc-800 py-[1rem] px-[1.5rem] ">
         <CreateBlog/>
   
        </div>
      
        <div className="items-center w-[100%]  bg-zinc-800 pt-[1rem] mt-[1rem] text-white">
        <Blog/>

   
        </div>
    </div>
  )
}

export default Home