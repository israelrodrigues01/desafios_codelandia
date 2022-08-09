import '.././sass/card.sass'

function Card({img, titulo, desc}){
	return(

		<div className="card">
			<img src={img} alt="image" />
			<span>
				<h3>{titulo}</h3>
				<p>{desc}</p>
			</span>
		</div>

	)
}

export default Card