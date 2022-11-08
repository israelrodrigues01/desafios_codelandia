import Cards from './Cards'

function SectionCard(){
	return(
		<section>
			<div className="content-width">
				<h2 className="titulo">Mais vendidas</h2>
				<Cards />

				<div className="img-flutuante img4">
					<img src="src/assets/img/img4.png" alt="" />
				</div>
				<div className="img-flutuante img5">
					<img src="src/assets/img/img5.png" alt="" />
				</div>
				<div className="img-flutuante img6">
					<img src="src/assets/img/img6.png" alt="" />
				</div>
				<div className="img-flutuante img7">
					<img src="src/assets/img/img7.png" alt="" />
				</div>
				<div className="img-flutuante img8">
					<img src="src/assets/img/img8.png" alt="" />
				</div>
			</div>
		</section>
	)
}

export default SectionCard