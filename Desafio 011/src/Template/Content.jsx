import '../assets/styles/style.sass'
import Modal from './Components/Modal'

function Content(){
    return (
        <>
            <div className="elipses">
                <div className="elipse elipse-one"></div>
                <div className="elipse elipse-two"></div>
            </div>
            <div className="content">
                <div className="content-header">
                    <h1>Jogo da memoria</h1>
                    <div className="content-select">
                        <select>
                            <option value="facil">Facil</option>
                            <option value="medio">Médio</option>
                            <option value="dificil">Dificil</option>
                        </select>
                    </div>
                </div>
            </div>
            <Modal />  
        </>
    )
}

export default Content