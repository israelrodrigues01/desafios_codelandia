import '.././Main.sass'

import restaurant from '../../../img/restaurant.png'
import img1 from '../../../img/img1.png'
import img2 from '../../../img/img2.png'
import img3 from '../../../img/img3.png'

function Sobre() {
	return (
		<section className="section-sobre">
			<div className="content-width">
				<div className="content-sobre">
					<div className="content-sobre_img">
						<img src={restaurant} alt="" />
						<img className="img-flutuante" src={img1} alt="" />
					</div>
					<div className="content-sobre_conteudo">
						<h2 className="titulo">
							Sobre a La P
							<span className="span-yellow">i</span>
							<span className="span-red">z</span>
							<span className="span-green">z</span>
							a
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem.
							onec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet
							incidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec
							i. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque
							uis fermentum.
						</p>
						<button>Ler mais</button>

						<div className="img-flutuante img2">
							<img src={img2} alt="" />
						</div>
						<div className="img-flutuante img3">
							<img src={img3} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Sobre