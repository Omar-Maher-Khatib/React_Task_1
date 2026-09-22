import './portfolio.css';
import cabin from './../../assets/cabin.png';
import cake from './../../assets/cake.png';
import circus from './../../assets/circus.png';
import game from './../../assets/game.png';
import safe from './../../assets/safe.png';
import submarine from './../../assets/submarine.png';

function Portfolio() {
    return <section className="portfolio">
        <div className="container">
            <h2 className="text-center">Portfolio</h2>
            <div className="grid-images gap-5 d-flex flex-wrap justify-content-center align-items-center">
                <img src={cabin} className="img-fluid"/>
                <img src={cake} className="img-fluid"/>
                <img src={circus} className="img-fluid"/>
                <img src={game} className="img-fluid"/>
                <img src={safe} className="img-fluid"/>
                <img src={submarine} className="img-fluid"/>
            </div>
        </div>
    </section>
}
export default Portfolio;