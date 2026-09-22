import './navbar.css';

function Navbar() {
    return <nav className="navbar container gap-3">
        <h2 className="title">Start Bootstrap</h2>
        <div className="links">
            <a href="/portfolio"  className="p-3">Portfolio</a>
            <a href="/about" className="p-3">About</a>
            <a href="/contact" className="p-3">Contact</a>
        </div>
    </nav> 
}
export default Navbar;