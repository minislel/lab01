function RatingBar({ rate = 0 }) {
  const validRate = Math.max(0, Math.min(10, rate));

  const stars = Array.from({ length: 10 }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= validRate;

    return (
      <span
        key={index}
        style={{
          color: isFilled ? "#ffd700" : "#808080", // Szary kolor dla pustych gwiazdek
          fontSize: "1.2em",
          marginRight: "2px",
        }}
      >
        {isFilled ? "★" : "☆"}
      </span>
    );
  });

  return (
    <div className="rating-bar d-flex align-items-center">
      {stars}
      <span className="ms-2 text-muted">({validRate}/10)</span>
    </div>
  );
}

export default RatingBar;
