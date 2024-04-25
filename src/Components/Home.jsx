import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export function Home() {
  return (
    <section className="home ">
        <div className="overlay">
          <article className='lg:w-1/2 lg:mr-20'>
            <h1 className='text-2xl text-gray-400 '>SO, YOU WANT TO TRAVEL TO {" "}
              <span className='
              block text-4xl lg:text-6xl text-white mt-5 mb-10
              '>
              SPACE
              </span>
               </h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam possimus, illum libero officia iste voluptatibus repellat, voluptate non placeat odit recusandae illo reprehenderit asperiores eos dolor quo? Quidem, incidunt.</p>
             </article>
             <article>
             <button className='w-52 h-52 rounded-full bg-white text-gray-800 font-bold uppercase
             lg:text-4xl animate-pulse' >
                <Link to ="/destination">
                    Explore
                </Link>
             </button>
             </article>
        </div>
    </section>
  )
}

