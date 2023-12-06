import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const ContactUs = () => {
    return (
        <div>
            <Header active="contact-us" />
            <div style={{padding:"0 5%"}}>
                <h1 className="mt-5 mb-3 green-heading">Contact Us</h1>
                <p style={{fontSize:"16px",fontWeight:"bold",margin:0}}>For conference relatied queries write to us on<br /> 
                </p>
                <ul>
                <li>
                    <a href="mailto:acet@akgec.ac.in">acet@akgec.ac.in</a>
                </li>
                <li>
                    <a href="mailto:prasadrajesh@akgec.ac.in">prasadrajesh@akgec.ac.in</a>
                </li>
                </ul>
                <p style={{fontSize:"16px",fontWeight:"bold",margin:0}}>Address</p>
                <p>27th Km Milestone,
                    Delhi-Meerut Expressway,
                    P.O. Adhyatmik Nagar,
                    Ghaziabad - 201009</p>
            </div>
                <div style={{position:"absolute",bottom:"0"}}>
                    <Footer />
                </div>
        </div>
    )
}

export default ContactUs;
