import Logo from './assets/content1222.png'
import './styles/intro.css'

export default function Introduction(){
    return(
        <header className="background-intro">
            <section className="intro-title">
                <h1>Churrasco</h1>
                <section className="intro-sub">
                <h3>Esse é o nosso restaurante e churrascaria, nossas carnes são de alta qualidade, mesmo nosso restaurante snedo chique,
                    nossas carnes vão agradar você e toda sua familia!
                </h3>
            </section>
            </section>
            <section className="intro-img">
                <img src={Logo} alt="11" />
            </section>
        </header>
    )
}