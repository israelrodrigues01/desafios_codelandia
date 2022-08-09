import Logo from './Logo'
import SectionContent from './SectionContent'


function Header(){
	return (
		<header className="header bg-pink" id="inicio">
			<div className="content">
				<div className="menu">
					<Logo />
					<nav>
						<a href="#inicio">Início</a>
						<a href="#acessorios">Acessórios</a>
						<a href="#">Doação</a>
						<a href="#">Contato</a>
					</nav>
				</div>


				<SectionContent 
					className="section-content"
					titulo="Feliz Natal e Feliz Ano Novo!"
					desc="Nessas festas de fim de ano mande um presente para a pessoa amada e compartilhe a alegria do Natal."
					btnText="Fazer uma doação"
					img="src/assets/img/send.png"				

				/>
			</div>
		</header>
	)
}

export default Header