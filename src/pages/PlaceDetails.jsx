import { useParams } from "react-router-dom";
import { places } from "../data";
import CarouselWrapper from "../components/CarouselWrapper";

export default function PlaceDetails() {
  const { id } = useParams();
  const place = places.find(p => p.id === Number(id));

  if (!place) {
    return <h1 style={{ textAlign: "center", marginTop: "50px" }}>Place not found</h1>;
  }

  return (
    <div style={styles.container}>
      {/* Title */}
      <h1 style={styles.title}>{place.name}</h1>

      {/* Description */}
      {place.description && (
        <p style={styles.description}>{place.description}</p>
      )}

      {/* Photos */}
      {place.extraPhotos && place.extraPhotos.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <h2 style={styles.sectionTitle}>Photos</h2>

          <CarouselWrapper
            photos={place.extraPhotos}
            title={place.name}
          />
        </div>
      )}

      {/* Activities */}
      {place.activities && place.activities.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Activities</h2>
          <ul style={styles.list}>
            {place.activities.map((act, idx) => (
              <li key={idx} style={styles.listItem}>{act}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Nearby Restaurants */}
      {place.restaurantsAround && place.restaurantsAround.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Restaurants Around</h2>
          <ul style={styles.list}>
            {place.restaurantsAround.map((res, idx) => (
              <li key={idx} style={styles.listItem}>
                {res.name} {res.rating && `⭐ ${res.rating}`}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tips */}
      {place.tips && place.tips.length > 0 && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Tips</h2>
          <ul style={styles.list}>
            {place.tips.map((tip, idx) => (
              <li key={idx} style={styles.listItem}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {

  container: {
    maxWidth: "1100px",
    margin: "60px auto",
    padding: "30px 20px 60px 20px",
    fontFamily: "'Inter', sans-serif",
    color: "#ddd",
    
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "20px",
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: "18px",
    marginBottom: "30px",
    textAlign: "justify",
    color: "#eee",
  },
  mainImageWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  mainImage: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },
  photoGallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginBottom: "30px",
  },
  extraPhoto: {
    width: "100%",
    borderRadius: "15px",
    objectFit: "cover",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    borderBottom: "2px solid #555",
    paddingBottom: "5px",
    color: "#fff",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "#ddd",
  },
  listItem: {
    marginBottom: "10px",
  }
};