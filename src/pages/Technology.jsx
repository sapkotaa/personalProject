import React from 'react'
import {useState} from "react"
import {technology} from "../starter-code/data.json"
import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";


function Technology () {
  const[cards] = useState(technology)
  const [value,setValue] = useState(0)
  
const{name,images,description} = 
cards[value]
  return (
   <>
   <section className='home technology px-5'>
<div className='pt-10 arts md:grid grid-cols-2 gap-5
md:items-center lg:max-w-7xl lg:mx-auto lg:pt-40
'>

<article className='text-center left lg:flex lg:text-left'>
<div className='lg:flex lg:flex-col gap-8 pt-20 pr-5'>
{cards.map((item,index) => (
  <button key={index} onClick={()=> setValue(index)}
  className = {`uppercase text-white rounded-full border-2 border-white text-2xl h-12 w-12 mx-2
  ${index === value && "bg-gray-500 rounded-full"}
  `}
  >
   {index+1}
  </button>
))}
</div>
<div>
<h1 className='pb-10  text-bold text-3xl uppercase font-extralight'>03 SPACE LAUNCH 101</h1>
<h1>THE TERMINOLOGY...</h1>
<h2 className="text-5xl font-bold text-black-500 mt-5 uppercase tracking-widest">{name}</h2>
<p className="pb-5">{description}</p>
</div>
</article>
  <article>
   <picture>
     <source media="(min-width: 768px)" srcSet = {images.portrait} /> 
      <img 
      src={images.landscape}
      alt= {name}
      title = {name}
      className = "block mx-auto mb-10"
      />
   </picture>
  </article>
</div>
   </section>
   </>
  )
}

export default Technology