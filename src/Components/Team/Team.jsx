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
                    <div class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full flex justify-center">
                                    <div class="relative">
                                        <img
                                            src={e.image}
                                            class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                                            alt=""
                                        />
                                    </div>
                                    <br />
                                </div>
                                <div class="w-full text-center mt-20" >
                                    <div class="text-center">
                                        <h3 class="text-2xl text-slate font-bold leading-normal">
                                            {`${e.firstName} ${e.lastName}`}
                                        </h3>
                                    </div>
                                    <div class="flex justify-center">
                                        <div class="p-3 text-center">
                                            <span class="text-slate">
                                                {e.tittle}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center mb-6">
                            <div class="p-3 text-center">
                                <a href={e.urlGithub} target="_blank" rel="noreferrer">
                                    <img
                                        className="cursor-pointer h-8 "
                                        src={e.iconGithub}
                                        alt="Github"
                                    />
                                </a>
                            </div>
                            <div class="p-3 text-center">
                                <a href={e.urlLinkedin} target="_blank" rel="noreferrer">
                                    <img
                                        className="cursor-pointer h-8"
                                        src={e.iconLinkedin}
                                        alt="Linkedin"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
