import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeam } from "../../Redux/Slices/Team/teamAction";

export default function Team() {
    const dispatch = useDispatch()
    const { team } = useSelector(state => state.teamState)

    useEffect(() => {
        dispatch(getTeam())
    }, [dispatch])


    return (
        <div>
            {team.map((e) => {
                return (
                    <div>
                        <h1>{e.firstName}</h1>
                        <h1>{e.lastName}</h1>
                        <img src={e.image} alt="" />
                        <a href={e.urlGithub} target="_blank" rel="noreferrer"><img src={e.iconGithub} alt="" /></a>
                        <a href={e.urlLinkedin} target="_blank" rel="noreferrer"><img src={e.iconLinkedin} alt="" /></a>
                    </div>
                )
            })}
        </div>
    )
}
