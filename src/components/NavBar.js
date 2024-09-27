import './styles/navbar.css'

export default function Navbar(){
    
    const LogoTitle = 'Churrasco'

    return(
        <header className="navbar">
            <nav className="navbar-nav">
                <ul className="navbar-nav-ul">
                    <li><h1>{LogoTitle}</h1></li>
                </ul>
            </nav>
        </header>
    )
}