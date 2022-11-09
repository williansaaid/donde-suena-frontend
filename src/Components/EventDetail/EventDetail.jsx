import React,{useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getEventsById}from "../../Redux/eventActions";
import Navbar from "../Navbar/Navbar"



export default function Detail(){
    const dispatch = useDispatch()
    const {detail} = useSelector(state=>state.events)

    // useEffect(()=>{
    //     dispatch(getEventsById())
    // },[])
    return(
        <div>
            <Navbar/>
        </div>
       
    )
}