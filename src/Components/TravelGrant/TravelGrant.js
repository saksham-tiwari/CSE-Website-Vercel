import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const TravelGrant = () => {
    return (
        <div>
            <Header active="travel-grant" />
            <p style={{fontSize:"20px", width:"75%", margin:"5% 10%", fontWeight:"bold"}}>Travel grant will be provided to IEEE students on first come first serve basis(as per availability of grant).</p>
            <div style={{position:"absolute",bottom:"0"}}>
                <Footer />
            </div>
        </div>
    )
}

export default TravelGrant;
