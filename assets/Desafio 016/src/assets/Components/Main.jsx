import Card from './Card'
import SectionContent from './SectionContent'



function Main(){

	const inforCard = [
		{
			id: 1, 
			title: 'Presentes', 
			texto: 'Eles são os melhores presentes que existem.', 
			image: 'src/assets/img/giving1.png',
		},
		{
			id: 2, 
			title: 'Enfeites', 
			texto: 'Dê uma decoração.', 
			image: 'src/assets/img/giving2.png',
		},
		{
			id: 3, 
			title: 'Doces', 
			texto: 'Aproveite os doces natalinos.', 
			image: 'src/assets/img/giving3.png',
		},
		{
			id: 4, 
			title: 'Muito amor', 
			texto: 'Aproveite os sentimentos que duram para sempre.', 
			image: 'src/assets/img/giving4.png',
		},
	]

	return(
		<>
		<div className="content">
			<section className="acessorios" id="acessorios">
				<div className="acessorios-title">
					<h1>Acessórios</h1>
					<p>Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal.</p>
				</div>

				<div className="acessorios-cards">

					{inforCard.map(card =>(
						<Card 
							key={card.id}
							id={card.id} 
							img={card.image} 
							titulo={card.title} 
							desc={card.texto} 
						/>
					))}
			
				</div>
			</section>
		</div>

		<div className="acessorios-conteudo bg-pink">
			<div className="content" id='doacao'>
				<SectionContent
					className="section-content reverse"
					titulo="Comemore com muito amor!"
					desc="Nestes feriados, festeje com muito amor e paz, oferecendo muitas bênçãos aos nossos entes queridos, amigos e vizinhos, desejando-lhes um Feliz Natal."
					btnText="Fazer doação"
					img="src/assets/img/shared.png"				
				/>
			</div>
		</div>
		</>
	)
}

export default Main



// 