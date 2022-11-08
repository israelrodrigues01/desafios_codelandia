import Logo from './Logo'


function Footer(){
	return(

		<footer id='contato'>
			<div className="content">
				<div className="menu">
					<Logo />
					<nav>
						<a href="#">
							<img src="src/assets/img/twitter.png" alt="" />
						</a>
						<a href="#">
							<img src="src/assets/img/youtube.png" alt="" />
						</a>
						<a href="#">
							<img src="src/assets/img/linkedin.png" alt="" />
						</a>
						<a href="#">
							<img src="src/assets/img/instagram.png" alt="" />
						</a>
						<a href="#">
							<img src="src/assets/img/facebook.png" alt="" />
						</a>
					</nav>
				</div>
			</div>
		</footer>

	)
}


export default Footer