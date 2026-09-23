import './footer.css';

function Footer() {
    return <footer className="footer d-flex flex-column justify-content-center align-items-center">
        <div className="footer-content container d-flex justify-content-between align-items-start pt-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center mb-4">Location</h2>
                <p className="text-center">2215 John Daniel Drive <br />
                Clark, MO 65243</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center mb-4">Around the Web</h2>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center mb-4">About Freelancer</h2>
                <p className="text-center">Freelance is a free to use, MIT licensed <br />
                    Bootstrap theme created by <span className="bootstrap">Start Bootstrap</span>.</p>
            </div>
        </div>
        <div className="footer-bottom d-flex justify-content-center align-items-center pt-4 pb-2">
            <p className="text-center">Copyright &copy; Your Website 2023</p>
        </div>
    </footer>
}
export default Footer;