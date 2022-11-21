import axios from "axios";
import { searchByDate } from "./filterSlice";

export const getEventByDate = (date) => (dispatch) => {
<<<<<<< HEAD
    axios(`http://localhost:3001/event/getEvents?filter[endDate]=${date}`)
        .then((res) => dispatch(searchByDate(res.data.events)))
        .catch((e) => console.log(e));
=======
	axios(`/event/getEvents?filter[endDate]=${date}`)
		.then((res) => dispatch(searchByDate(res.data.events)))
		.catch((e) => console.log(e));
>>>>>>> 350fa7ecdf550bb4d970d3fcab5fe0e182945eda
};
