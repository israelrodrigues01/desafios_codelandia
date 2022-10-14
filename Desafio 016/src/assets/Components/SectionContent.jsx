function SectionContent({className, titulo, desc, btnText, img}){
	return(

		<section className={className}>
			
			<div className="section-conteudo">
				<h1>{titulo}</h1>
				<p>{desc}</p>
				<a href="#" className="btn">
					<img src="src/assets/img/gift.png" alt="" />
					{btnText}
				</a>
			</div>
			<div className="section-img">
					<img src={img} alt="" />
			</div>

		</section>

	)
	
}

export default SectionContent