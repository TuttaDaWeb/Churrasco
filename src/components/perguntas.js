import './styles/pergun.css'

export default function Pergun(){
    return(
        <header className="asking">
            <details className="ask-all">
                <summary className="ask-all-summary">Porque você DEVE escolher nossas Churrascaria?</summary>
                <p>Porque nossa churrascaria é a melhor do mercado! é a que mais vende em nossa Cidade, além de não ser muito caro,
                    as nossas Carnes são as que tem mais qualidade!
                </p>
            </details>
            <details className="ask-all">
                <summary className="ask-all-summary">Nós aceitamos PIX?</summary>
                <p>SIM! Nós aceitamos PIX, não só isso como todo tipo de sistema de pagamento, até cheque nós aceitamos!
                </p>
            </details>
            <details className="ask-all">
                <summary className="ask-all-summary">As Carnes são de Qualidade?</summary>
                <p>SIM! Nossas Carnes são de Ótima Qualidade, tanto que possuimos uma variedade de carnes diferentes, que vai desde
                    Carne Kobe, o Famoso Wagyu, até Salsicha.
                </p>
            </details>
        </header>
    )
}