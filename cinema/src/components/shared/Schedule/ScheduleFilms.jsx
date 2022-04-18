import PropTypes from "prop-types";
import { useState } from "react";
import ScheduleFilmCard from "./ScheduleFilmCard";

const ScheduleFilms = ({ films }) => {
	return (
		<>
			{films.map((film) => (
				<ScheduleFilmCard key={film.id} film={film} />
			))}
		</>
	);
};

ScheduleFilms.propTypes = {
	films: PropTypes.array,
};

export default ScheduleFilms;
