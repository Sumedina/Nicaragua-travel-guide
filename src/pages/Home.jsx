import { useNavigate } from "react-router-dom";
import PlaceCard from "../PlaceCard";
import { places } from "../data";
import "../App.css";

export default function Home() {
    const navigate = useNavigate();

    const filledPlaces = [...places];
    while (filledPlaces.length < 8) {
        filledPlaces.push({});
    }

    return (
        <div className="page-container">  
            <div className="intro">
                <h1>Welcome to Nicaragua 🇳🇮</h1>
                <p>A country full of culture, history, and natural wonders.
                    Explore our selection of recommended tourist destinations 
                    and find your next favorite place to visit.
                </p>
            </div>

            <div className="grid">
                {filledPlaces.map((place, idx) => (
                    <PlaceCard 
                        key={idx} 
                        {...place} 
                        onClick={() => {
                            if (!place.id) return;
                            navigate(`/place/${place.id}`);
                        }} 
                    />
                ))}
            </div>
        </div>
    )
}