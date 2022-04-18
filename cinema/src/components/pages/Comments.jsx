const Comments = () => {
	return (
		<div className="comments">
			<h1>Відгуки</h1>
			<h3>Саме ваш відгук може покращити наш заклад! </h3>
			<div className="starts"></div>
			<textarea
				name=""
				id=""
				cols="30"
				rows="10"
				placeholder="Ваш коментар..."
			></textarea>
			<button>Надіслати</button>
			<div className="commments-container">
				<div className="comment">
					<img src="" alt="" />
					<h5>Alex</h5>
					<div className="stars-comment"></div>
					<p>
						У вас до редизайну умови/правила відвідування були
						розміщені на сайті, а зараз я їх не можу знайти на
						старому сайті була пдф з правилами, де було вказано
						дітям до скількох років прохід безкоштовно (без місця)
					</p>
				</div>
				<div className="comment">
					<img src="" alt="" />
					<h5>Alex</h5>
					<div className="stars-comment"></div>
					<p>
						У вас до редизайну умови/правила відвідування були
						розміщені на сайті, а зараз я їх не можу знайти на
						старому сайті була пдф з правилами, де було вказано
						дітям до скількох років прохід безкоштовно (без місця)
					</p>
				</div>
			</div>
		</div>
	);
};

export default Comments;
