function Card() {
    return (
        <>
            <div className="card" style={{width: "500px"}}>
                <div className="card-body">
                    <h5 className="card-title" style={{ textTransform: "uppercase" }}>Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </>
    );
}

export default Card;