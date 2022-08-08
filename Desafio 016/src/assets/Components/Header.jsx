import '../sass/style.sass'

import MenuContent from './ContentNav/MenuContent'


function Header(){
	return (
		<header>
			<div className="content">
				<MenuContent />
			</div>
		</header>
	)
}

export default Header