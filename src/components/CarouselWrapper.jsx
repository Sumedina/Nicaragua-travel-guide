import Carousel from "react-bootstrap/Carousel";

export default function CarouselWrapper({ photos, title }) {
  return (
    <Carousel fade style={{ borderRadius: "20px", overflow: "hidden" }}>
      {photos.map((photo, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={photo}
            alt={`${title} photo ${idx + 1}`}
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <p>{title} - Photo {idx + 1}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
