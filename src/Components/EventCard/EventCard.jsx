import React,{useEffect  } from "react";
import { useDispatch } from "react-redux";
import {getEvents , }from "../../Redux/eventActions";
import { useSelector } from "react-redux";

export const Events = ()=> {
  const dispatch =useDispatch()
  const {events} = useSelector(state=>state.events)

  useEffect(()=>{
    
    dispatch(getEvents())
  },[])
  

  return(
    <div class="flex space-x-20 flex flex-wrap ">
    {events&&events.map((el,id)=>{
      return(
        <card class="relative h-[25rem] sm:h-50 w-[20rem] rounded-lg">

        <div key={id}>
  
        <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
   
            <img class="object-cover w-auto h-auto rounded-lg  ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
         src={el.image}
         alt="imagen no encontrada"
         />
      <div className="absolute bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" /> 
        <div class="absolute w-full h-full bottom-0 bg- rounded-lg flex flex-col justify-items-center  justify-end text-left">

        <div class=  "justify-items-center justify-end text-left">
     
        <a href={`/details/${id}`} class="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
          
        {el.name}
        </a>
        
       
        </div>
        
        <span class="text-sm text-gray-500 dark:text-gray-300">📅Fecha :{el.date}</span>
        <span class="text-sm text-gray-500 dark:text-gray-300">⏰Inicia {el.start} - Finaliza {el.end}</span>
        <span class="text-sm text-gray-500 dark:text-gray-300">💵Compra por {el.price}</span>
        
        </div>
        </div>
        </div>
         </card>
      
       
      )
    })}
    </div>
  )
     
  }