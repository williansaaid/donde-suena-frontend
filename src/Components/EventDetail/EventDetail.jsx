import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById } from "../../Redux/eventActions";
import Navbar from "../Navbar/Navbar";

export default function Detail(props) {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.events);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getEventsById(id));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
      <img
          src="https://i.gifer.com/GE0A.gif"
          alt="image"
          width="800px"
          height="500px"
        />
        </div>
      {/*<img src={detail.image} alt="Event" width="400px" height="250px"/>
         <h1> {detail.name}</h1>
         <h3>{detail.date}</h3>
         <h3>{detail.price}</h3>*/}

      </div>
     

  );
}
