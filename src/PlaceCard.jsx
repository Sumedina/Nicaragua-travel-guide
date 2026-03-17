export default function PlaceCard({ image, name, departament, rating, time, onClick }) {
    return (
        <div className="place-card" onClick={onClick}>
            { image ? (
                <div className="image-wrapper">
                    <img src={image} alt={name} />
                </div>
            ) : (
                <div className="image-wrapper empty"></div>
            )}

            <div className="info">
                <h3>{name || ""}</h3>
                <p className="departament">{departament || ""}</p>

                    <div className="meta">
                        <span className="rating">{rating ? `⭐ ${rating}` : ""}</span>
                        <span className="time">{time || ""}</span>
                    </div>
                </div>
        </div>
    )
} 