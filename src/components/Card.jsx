import languages from '../data/languages';     //importo l'oggetto languages

function Card({ activeButton }) {
    const languageSel = languages.filter((language) => {
        // console.log("Language: ", language.id);     //test
        // console.log("ActiveButton: ", activeButton);   //test

        if (parseInt(language.id) == parseInt(activeButton)) {
            // console.log("Language selected: ", language.id);    //test
            // console.log("ActiveButton selected: ", activeButton);  //test
            return language;
        };
    })[0];
    // console.log("LanguageSel: ", languageSel);  //test


    return (
        <>
            {/* Se il valore di languageSel è null allora nascondo la card intera con la classe "card-none" altrimenti la visualizzo con la classe "card" */}
            <div className={languageSel == null ? "card-none" : "card"} style={{ width: "500px" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ textTransform: "uppercase" }}>{languageSel == null ? "" : languageSel.title}</h5>
                    <p className="card-text">{languageSel == null ? "" : languageSel.description}</p>
                </div>
            </div>
        </>
    );
}

export default Card;