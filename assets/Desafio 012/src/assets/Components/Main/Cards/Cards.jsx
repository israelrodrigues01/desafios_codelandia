import Card from './Card'

function Cards(){

	const cardsInfor = [
		{
	        id: 1,
	        image: 'image 16.png',
	        title: 'La Cuma',
	        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	        preco: 'R$ 23',
	        btn: 'Comprar agora'
	    },
	    {
	        id: 2,
	        image: 'image 17.png',
	        title: 'La Cuma',
	        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	        preco: 'R$ 23',
	        btn: 'Comprar agora'
	    },
	    {
	        id: 3,
	        image: 'image 18.png',
	        title: 'La Cuma',
	        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	        preco: 'R$ 23',
	        btn: 'Comprar agora'
	    },
	    {
	        id: 4,
	        image: 'image 19.png',
	        title: 'La Cuma',
	        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	        preco: 'R$ 23',
	        btn: 'Comprar agora'
	    },
	];

	return(
		<div className="content-cards">
			{cardsInfor.map(card => (
				<Card 
					title={card.title} 
					image={`src/assets/img/${card.image}`} 
					desc={card.desc} 
					preco={card.preco} 
					button={card.btn} />
			))}
		</div>
	)
}

export default Cards