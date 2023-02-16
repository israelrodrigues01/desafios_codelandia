import Cards from './Cards'

import img4 from '../../../img/img4.png'
import img5 from '../../../img/img5.png'
import img6 from '../../../img/img6.png'
import img7 from '../../../img/img7.png'
import img8 from '../../../img/img8.png'

function SectionCard() {
	return (
		<section>
			<div className="content-width">
				<h2 className="titulo">Mais vendidas</h2>
				<Cards />

				<div className="img-flutuante img4">
					<img src={img4} alt="" />
				</div>
				<div className="img-flutuante img5">
					<img src={img5} alt="" />
				</div>
				<div className="img-flutuante img6">
					<img src={img6} alt="" />
				</div>
				<div className="img-flutuante img7">
					<img src={img7} alt="" />
				</div>
				<div className="img-flutuante img8">
					<img src={img8} alt="" />
				</div>
			</div>
		</section>
	)
}

export default SectionCard