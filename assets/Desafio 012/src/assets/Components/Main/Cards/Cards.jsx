import Card from './Card'
import pizza1 from '../../../img/pizza1.png'
import pizza2 from '../../../img/pizza2.png'
import pizza3 from '../../../img/pizza3.png'
import pizza4 from '../../../img/pizza4.png'


function Cards() {

	const cardsInfor = [
		{
			id: 1,
			image: pizza1,
			title: 'La Cuma',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			preco: 'R$ 23',
			btn: 'Comprar agora'
		},
		{
			id: 2,
			image: pizza2,
			title: 'La Menta',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			preco: 'R$ 23',
			btn: 'Comprar agora'
		},
		{
			id: 3,
			image: pizza3,
			title: 'La Bana',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			preco: 'R$ 23',
			btn: 'Comprar agora'
		},
		{
			id: 4,
			image: pizza4,
			title: 'La Toca',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			preco: 'R$ 23',
			btn: 'Comprar agora'
		},
	];

	return (
		<div className="content-cards">
			{cardsInfor.map(card => (
				<Card
					title={card.title}
					image={card.image}
					desc={card.desc}
					preco={card.preco}
					button={card.btn} />
			))}
		</div>
	)
}

export default Cards