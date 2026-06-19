import HomeImg from "../assets/Cars/HomeImg.jpg"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <div className="hero-section">
                <div className="hero-image">
                    <img
                        src={HomeImg}
                        alt="DriveHub Car"
                    />
                </div>

                <div className="hero-content">
                    <h1>Welcome to DriveHub</h1>

                    <p>
                        Discover luxury, sports, SUV and electric
                        vehicles from the world's top automobile
                        brands. Experience performance, comfort,
                        innovation and elegance all in one place.
                    </p>

                    <button
                        className="hero-btn"
                        onClick={() => navigate("/cars")}
                    >
                        Explore Cars
                    </button>
                </div>
            </div>

            <div className="stats">
                <div className="stat-box">
                    <h2>500+</h2>
                    <p>Cars Sold</p>
                </div>

                <div className="stat-box">
                    <h2>1000+</h2>
                    <p>Happy Customers</p>
                </div>

                <div className="stat-box">
                    <h2>20+</h2>
                    <p>Premium Brands</p>
                </div>
            </div>
        </div>
    );
}

export default Home;