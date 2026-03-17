import "./guide.css";

export default function Guide() {
    return (
        <div className="guide-container">
            <div className="guide-card">
                <h1 className="guide-title">Nicaragua Travel Guide</h1>

                <p className="guide-text">
                    This website was created to help you discover the many places that make Nicaragua
                    a unique and exciting destination. If you are planning a trip or simply looking for ideas on 
                    where to go, here you will find a collection of interesting attractions and popular tourist destinations.
                </p>

                <h2 className="guide-subtitle">What You Will See on Each Destination</h2>

                <ul className="guide-list">
                    <li>
                        <strong>Place Name</strong>: The official name of the tourist attraction or point of interest.
                    </li>
                    <li>
                        <strong>Department</strong>: Each destination shows the department where it is located, helping 
                        you understand its regional position within the country.
                    </li>
                    <li>
                        <strong>Rating</strong>: A small star "⭐" rating offering a quick, subjective idea of how 
                        notable or popular the destination is.
                    </li>
                    <li>
                        <strong>Distance & Travel Time</strong>: Each trip estimate is calculated from 
                        Managua, so you can easily understand how far each place is and how long it usually takes 
                        to get there.
                    </li>
                </ul>
                <p className="guide-end">Enjoy exploring Nicaragua! 🇳🇮</p>
            </div>
        </div>
    );
}
