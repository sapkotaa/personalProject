import React from 'react'
import {useState} from "react"
import {destinations} from "../starter-code/data.json"


function Destination() {
  const[planets] = useState(destinations)
  const [value,setValue] = useState(0)
  
const{name,images,description,distance,travel} = 
planets[value]
  return (
   <>
   <section className='home destination px-5'>
    <h1>01 Pick your destination</h1>


<div className='pt-10 md:grid grid-cols-2 gap-5
md:items-center lg:max-w-7xl lg:mx-auto lg:pt-40
'>
  <article>
    <img 
    src={images.png}
    alt = {name}
     title= {name}
     className = "block mx-auto w-3/4 mb-10"
    />
  </article>


<article className='text-center lg:text-left'>
{planets.map((item,index) => (
  <button key={index} onClick={()=> setValue(index)}
  className = {`uppercase text-white text-2xl pb-2  mx-2
  ${index == value && "border-b "}
  `}
  >
    {item.name}
  </button>
))}

<h2 className="text-5xl font-bold text-black-500 mt-5">{name}</h2>
<p className='text-gray-400 border-b mb-10 pb-10'>{description}</p>
<ul className='flex items-center justify-between flex-wrap '>
  <li className='text-4xl text-white'> <span className='text-2xl block'>Avg. Distance</span> 
  {distance}</li>
  <li className='text-4xl text-white'> <span className='text-2xl block'>Est. Travel Time</span> {travel}</li>
</ul>
</article>
</div>
   </section>
   </>
  )
}

export default Destination