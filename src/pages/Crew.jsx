import React from 'react'
import {useState} from "react"
import {crew} from "../starter-code/data.json"
import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";


function Crew() {
  const[people] = useState(crew)
  const [value,setValue] = useState(0)
  
const{name,images,role,bio} = 
people[value]
  return (
   <>
   <section className='home destination crew px-5'>
<div className='pt-10 arts md:grid grid-cols-2 gap-5
md:items-center lg:max-w-7xl lg:mx-auto lg:pt-40
'>

<article className='text-center left lg:text-left'>
<h1 className='pb-20 text-bold text-3xl uppercase font-extralight'>02 Meet your crew</h1>
<h1 className='text-bold text-2xl uppercase'>{role}</h1>

<h2 className="text-5xl font-bold text-black-500 mt-5">{name}</h2>
<p className='text-gray-400 border-b mb-10 '>{bio}</p>
{people.map((item,index) => (
  <button key={index} onClick={()=> setValue(index)}
  className = {`uppercase text-white text-2xl pb-2 h-6 w-6 mx-2
  ${index === value && "bg-gray-500 rounded-full"}
  `}
  >
   <BsCircle/>
  </button>
))}

</article>
  <article>
    <img 
    src={images.png}
    alt = {name}
     title= {name}
     className = "block mx-auto w-3/4 mb-10"
    />
  </article>
</div>
   </section>
   </>
  )
}

export default Crew