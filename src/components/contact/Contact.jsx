import './contact.css';

function Contact() {
    return <section className="contact container d-flex flex-column align-items-center">
        <div className="contact-content d-flex flex-column align-items-center w-100">
            <h2 className="contact-title mt-5">Contact me</h2>
            <form className="contact-form d-flex flex-column align-items-start mt-5 w-50">
                <input type="text" placeholder="Full name" className="form-control mb-3 border-0 border-bottom" />
                <input type="email" placeholder="Email address" className="form-control mb-3 border-0 border-bottom" />
                <input type="phone" placeholder="Phone number" className="form-control mb-3 border-0 border-bottom" />
                <textarea placeholder="message" className="form-control border-0 border-bottom pb-5"></textarea>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>  
    </section>;
}
export default Contact;