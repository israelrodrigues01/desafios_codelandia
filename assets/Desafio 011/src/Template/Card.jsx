import '../assets/styles/cards.sass'

function Card({id, img, estilo, click}){

    const cardClass = estilo ? " " + estilo : ""

    return(
        <div className={"card" + cardClass} onClick={() => click(id)}>
            <div className="card-face card-face_front">
                <img 
                    src={img}
                    alt={estilo}
                />
            </div>
            <div className="card-face card-face_back">?</div>
        </div>
    )
}

export default Card