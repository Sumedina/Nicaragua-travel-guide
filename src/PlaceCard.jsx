export default function PlaceCard({ image, name, departament, rating, time, onClick }) {

    const imageUrl = image ? `${import.meta.env.BASE_URL}${image}` : "";

    return (
        <div className="place-card" onClick={onClick}>
            { imageUrl ? (
                <div className="image-wrapper">
                    <img src={imageUrl} alt={name} />
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