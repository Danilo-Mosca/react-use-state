import Button from "./components/Button"
import Card from "./components/Card"
import languages from './data/languages';     //importo l'oggetto languages

function App() {
  const programmingLanguages = [...languages];

  return (
    <>
      <h1>Learn Web Development</h1>
      <main>
        <section>
          {
            programmingLanguages.map((language) => {
              return <Button title={language.title} key={language.id} />
            })
          }

        </section>
        <section>
          <Card />
        </section>
      </main>
    </>
  )
}

export default App
