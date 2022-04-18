import { useState } from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";

import "react-calendar/dist/Calendar.css";
import calendarIcon from "../../../assets/Calendar.png";

const DatePicker = () => {
	const [value, onChange] = useState(new Date());
	const [showCalendar, setShowCalendar] = useState(false);

	return (
		<>
			<div
				onClick={() => setShowCalendar((prev) => !prev)}
				id="calendar"
				className="calendar"
			>
				<img src={calendarIcon} alt="calendar" />
				<span>{format(value, "dd/MM/yyyy")}</span>
			</div>
			{showCalendar && (
				<Calendar locale="uk" onChange={onChange} value={value} />
			)}
		</>
	);
};

export default DatePicker;
