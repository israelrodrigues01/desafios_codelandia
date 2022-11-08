function Card({title, image, desc, preco, button}){
	return(
		<div className="content-cards_card">
			<div className="card-image">
				<img src={image} alt="Pizza" />
				<img className="img-coracao" src='src/assets/img/coracao.svg' alt="Pizza" />
			</div>
			<div className="card-content">
				<h3>{title}</h3>
				<p>{desc}</p>
				<p className="preco">{preco}</p>
			</div>
			<button>{button}</button>
		</div>
	)
}

export default Card