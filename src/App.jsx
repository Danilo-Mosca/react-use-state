import { useState } from "react";   //Importo lo useState per le variabili dinamiche
import Button from "./components/Button"
import Card from "./components/Card"
import languages from './data/languages';     //importo l'oggetto languages

function App() {
  const [activeButton, setActiveButton] = useState(null);

  function buttonActive(id) {
    if (activeButton !== id) {
      setActiveButton(id);
    }
    else {
      setActiveButton(null);
    }
    // console.log(activeButton);   //prova funzionamento
  }

  const programmingLanguages = [...languages];

  return (
    <>
      <h1>Learn Web Development</h1>
      <main>
        <section>
          {
            programmingLanguages.map((language) => {
              return (
                <Button title={language.title}
                  key={language.id}
                  selected={activeButton === language.id}
                  activeButton={() => buttonActive(language.id)}
                />);
            })
          }
        </section>

        <section>
          <Card activeButton={activeButton} />
        </section>
      </main>
    </>
  )
}

export default App
