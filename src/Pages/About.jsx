import AboutImg from "../assets/Cars/AboutImg.jpg"
import { useNavigate } from "react-router-dom";
function About() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <div className="hero-section">
                <div className="hero-image">
                    <img
                        src={AboutImg}
                        alt="About DriveHub"
                    />
                </div>

                <div className="hero-content">
                    <h1>About DriveHub</h1>

                    <p>
                        DriveHub is a premium car showroom offering
                        luxury vehicles, SUVs, electric vehicles and
                        sports cars from leading brands worldwide.

                        Our mission is to help customers find their
                        dream car through exceptional service and
                        world-class automobile collections.
                    </p>

                    <button
                        className="hero-btn"
                        onClick={() => navigate("/services")}
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;