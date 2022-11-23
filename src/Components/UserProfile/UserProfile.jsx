import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../Redux/Slices/User/userAction";


export default function UserProfile() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { userId } = useSelector(state => state.userIdState)
    console.log(userId)

    useEffect(() => {
        dispatch(getUserById(id))
    }, [dispatch, id])

    return (
        <div>
            <h1>{userId.firstName}</h1>
            <h1>{userId.lastName}</h1>
        </div>
    )
}
