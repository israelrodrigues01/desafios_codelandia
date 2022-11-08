import '../assets/styles/cards.sass'
import Card from './Card'
import {useState} from 'react'

function Cards(){

    const [imagens, setImagens] = useState([
        {id: 1, nome: '01.png', estilo: ""},
        {id: 2, nome: '02.png', estilo: ""},
        {id: 3, nome: '03.png', estilo: ""},
        {id: 4, nome: '04.png', estilo: ""},
        {id: 5, nome: '05.png', estilo: ""},
        {id: 6, nome: '06.png', estilo: ""},
        {id: 7, nome: '07.png', estilo: ""},
        {id: 8, nome: '08.png', estilo: ""},
        {id: 9, nome: '09.png', estilo: ""},
        {id: 1, nome: '01.png', estilo: ""},
        {id: 2, nome: '02.png', estilo: ""},
        {id: 3, nome: '03.png', estilo: ""},
        {id: 4, nome: '04.png', estilo: ""},
        {id: 5, nome: '05.png', estilo: ""},
        {id: 6, nome: '06.png', estilo: ""},
        {id: 7, nome: '07.png', estilo: ""},
        {id: 8, nome: '08.png', estilo: ""},
        {id: 9, nome: '09.png', estilo: ""},
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function verificar(index){
        if(imagens[index].id == imagens[prev].id){
            imagens[index].estilo = "active"
            imagens[prev].estilo = "active"
            setImagens([...imagens])
            setPrev(-1)
        }else{
            imagens[index].estilo = "active"
            imagens[prev].estilo = "active"
            setImagens([...imagens])
            setTimeout(() => {
                imagens[index].estilo = ""
                imagens[prev].estilo = ""
                setImagens([...imagens])
                setPrev(-1)
            }, 1000)
        }
    }

    function click(index){
        if(prev === -1){
            setPrev(index)
            imagens[index].estilo = "active"
            setImagens([...imagens])
        }else{
            verificar(index)  
        }
    }

    return(
        <section className="content main-cards">
            {imagens.map((image, index) =>(
                <Card key={index} id={index} img={`src/assets/img/${image.nome}`} estilo={image.estilo} click={click} />
            ))}
        </section>
    )
}

export default Cards