import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./../Button";

const ScheduleFilmCard = ({ film }) => {
	const { id, img, title, times } = film;

	return (
		<div key={id} className="schedule-container__item">
			<img className="film__img" src={img} alt={title} />
			<div className={"hovered-content"}>
				<Button classNames={"btn-tickets"} text={"Купити"} />
				<Button classNames={"more-info"} text={"Детальніше"} />

				<div className="hovered-times">
					{times.map((time, index) => (
						<div key={index} className="hovered-time">
							{time}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

ScheduleFilmCard.propTypes = {
	film: PropTypes.object,
};
export default ScheduleFilmCard;
