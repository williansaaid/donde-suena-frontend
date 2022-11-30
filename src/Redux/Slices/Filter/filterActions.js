import axios from "axios";
import { searchByDate } from "./filterSlice";

export const getEventByDate = (date) => (dispatch) => {
	axios(`/event/getEvents?filter[endDate]=${date}`)
		.then((res) => dispatch(searchByDate(res.data.events)))
		.catch((e) => console.log(e));
};
