export default function GameCard({
    _id,
    title,
    genre,
    imageUrl
}) {
    return (
        <>
            <div className="game">
                <img src={imageUrl} alt={title} />
                <div className="details-overlay">
                    <p className="name">{title}</p>
                    <p className="genre">{genre}</p>
                    <a href={`/games/${_id}`} className="details-button">Details</a>
                </div>
            </div>
        </>
    );
}