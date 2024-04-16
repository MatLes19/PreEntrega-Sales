function NavBar() {
    return (
    <nav>
        <div className="nombre">
            Cosas De Locas
            </div>
        <ul>
        <li>
            <a href="#">Inicio</a>
        </li>
        <li>
            <a href="#">Categorías</a>
            <ul>
            <li>
                <a href="#">Mujeres</a>
            </li>
            <li>
                <a href="#">Hombres</a>
            </li>
            <li>
                <a href="#">Niños</a>
            </li>
            </ul>
        </li>
        <li>
            <a href="#">carrito</a>
        </li>
        <li>
            <a href="#">Cuenta</a>
        </li>
        </ul>
    </nav>
    
    );
}


export default NavBar