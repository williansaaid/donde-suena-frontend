import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { format, compareAsc } from 'date-fns'
import { date } from "yup";


const dateFormat = format(new Date(), 'yyyy-MM-dd');

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        events: [],
        filteredByDate: [],
        date: dateFormat,
    },
    //usando redux toolkits son los reducers son una mezcla de actions y reducers
    reducers: {
        getAllEventsFilter: (state, action) => {
            state.events = action.payload;
            return {
                ...state,
                filteredByDate: [...state.events.date].filter(
                    (events) => events.date 
                    ),                
                };
                
            },

        searchByDate: (state, action) => {
            state.events = action.payload;
        },
    },
});

export const { getAllEventsFilter, searchByDate } = filterSlice.actions; //en .actions guardo las funciones

export default filterSlice.reducer;
