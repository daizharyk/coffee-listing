function CoffeeCard({ coffee }) {
  const { name, price, rating, votes, image, popular, available } = coffee;

  return (
    <article className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-title">
        <h2>{name}</h2>
        <p className="price">{price}</p>
      </div>

      <div className="card-rating">
        <div className="rating-info">
          {votes > 0 ? (
            <span className="rating-text">
              <img
                src={`${process.env.PUBLIC_URL}/resources/Star_fill.svg`}
                alt="Star"
                className="star-icon"
              />
              {rating} <span className="votes">({votes} votes)</span>
            </span>
          ) : (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/resources/Star.svg`}
                alt="Star"
                className="star-icon"
              />
              <p>No ratings</p>
            </>
          )}
        </div>

        {!available && <p className="status sold-out">Sold Out</p>}
      </div>

      {popular && <span className="tag">Popular</span>}
    </article>
  );
}

export default CoffeeCard;
