import './hero.css';
import heroImage from './../../assets/avataaars.svg';

function Hero() {
    return <section className="hero">
        <div className="hero-content d-flex flex-column gap-3 justify-content-center align-items-center">
            <img src={heroImage} alt="Hero Image"/>
            <h1 className="text-center text-white">Start Bootstrap</h1>
            <p className="text-center text-white">Graphic Artist - Web Designer - Illustrator</p>
            
        </div>
    </section>
}
export default Hero;