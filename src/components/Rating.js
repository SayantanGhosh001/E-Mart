const Rating = (props) => {
    let rating=props.rating.rate
    let ratingCount=props.rating.count
    const fullStars = Math.floor(rating);
    const stars = Array.from({ length: 5 }, (_, i) =>
        i < fullStars
            ? <i key={i} className="fas fa-star text-warning" />
            : i === fullStars && rating % 1 !== 0
                ? <i key={i} className="fas fa-star-half-alt text-warning" />
                : <i key={i} className="far fa-star text-warning" />
    );

    return <>{stars} {rating} ({ratingCount}) </>;
}
export default Rating