import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventsById } from "../../Redux/eventActions";
import Navbar from "../Navbar/Navbar";

const EventDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.detail);
  console.log(detail);
  useEffect(() => {
    dispatch(getEventsById(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar />

      <div>
        <img
          src={detail.image}
          alt=""
          width="400px"
          height="250px"
        />
        <h1>{detail.name} holaaaaaaaaaaaaaaaaaaaa</h1>
      </div>
    </div>
  );
};
export default EventDetail;
