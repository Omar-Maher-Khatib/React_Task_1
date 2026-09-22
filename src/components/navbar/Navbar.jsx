import './navbar.css';

function Navbar() {
    return <nav className="navbar">
        <div className="navbar-content container gap-3 py-3">
            <h2 className="title">Start Bootstrap</h2>
            <div className="links">
                <a href="/portfolio"  className="p-3 text-decoration-none">Portfolio</a>
                <a href="/about" className="p-3 text-decoration-none">About</a>
                <a href="/contact" className="p-3 text-decoration-none">Contact</a>
            </div>
        </div>
    </nav> 
}
export default Navbar;