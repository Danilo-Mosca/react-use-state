import languages from '../data/languages';     //importo l'oggetto languages

function Card(activeButton) {
    const languageSel = languages.filter((language) => {
        console.log("Language: ",language.id);
        console.log("ActiveButton: ",activeButton);
        
        if (parseInt(language.id) === parseInt(activeButton)) {
            console.log("Language selected: ", language.id);
            console.log("ActiveButton selected: ", activeButton);
            return language;
};
    });
console.log("LanguageSel: ",languageSel);


return (
    <>
        <div className="card" style={{ width: "500px" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ textTransform: "uppercase" }}>Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </>
);
}

export default Card;