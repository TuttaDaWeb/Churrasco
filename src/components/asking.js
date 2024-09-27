import ChurrascoImg from './assets/churrasco-jpeg.jpg'
import './styles/asking.css'

export default function Asking(){
    return(
        <header className="churras">
            <section className="churras-text">
                <h2>Churrasco Marivilhoso!</h2>
                <section className="churras-sub">
                    <h4>Nossa Churrascaria tem mais de 40 carnes diferentes! tanto que se você escolher nossa Churrascaria,
                        Você não vai ser arrepender, você vai se maravilhar em nossas Carnes! Nossas Carnes são as melhores da Cidade
                        tão boas que qualquer fica de boca babando.
                    </h4>
                </section>
            </section>
            <section className="churras-img">
                <img src={ChurrascoImg} alt=""/>
            </section>
        </header>
    )
}