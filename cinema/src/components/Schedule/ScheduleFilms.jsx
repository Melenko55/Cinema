import PropTypes from "prop-types";
import { useState } from "react";
import ScheduleFilmCard from "./ScheduleFilmCard";

function ScheduleFilms({ films }) {
	return (
		<>
			{films.map((film) => (
				<ScheduleFilmCard key={film.id} film={film} />
			))}
		</>
	);
}

ScheduleFilms.propTypes = {
	films: PropTypes.array.isRequired,
};

export default ScheduleFilms;
