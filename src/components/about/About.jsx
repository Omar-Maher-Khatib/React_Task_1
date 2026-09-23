import './about.css';

function About() {
    return <section className="about">
        <div className="about-content d-flex flex-column gap-3 justify-content-center align-items-center">
            <h1 className="text-center text-white">About</h1>
            <div className="about-text w-50 d-flex flex-row gap-3 justify-content-center align-items-center align-items-start">
                <p className="text-start text-white w-50">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript 
                    as well as optional SASS stylesheets for easy customization.</p>
                <p className="text-start text-white w-50">You can create your own custom avatar for the masthead, 
                    change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
            
        </div>
    </section>
}
export default About;