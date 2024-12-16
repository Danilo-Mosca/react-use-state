# React react-use-state

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json

 # installo gli altri pacchetti che mi servono

 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

 # comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
```

```bash
*Esercizio*
Oggi proviamo a usare lo stato di React!
Dato un array di oggetti contenente i linguaggi del web e le loro descrizioni:
- Crea una lista di bottoni, uno per  linguaggio.
- Inserisci sotto una card che mostri il titolo e la descrizione del primo linguaggio nell’array.
- Fare in modo che, cliccando uno dei bottoni, la card in basso visualizzi il linguaggio corrispondente e la relativa descrizione
*Bonus*
- Se nessun linguaggio è selezionato, la card del dettaglio mostra “nessun linguaggio selezionato”
- Dare un colore diverso al bottone per cui il linguaggio è attualmente selezionato.
- Scomporre la card dei dettagli in un componente a parte che mantenga le sue funzionalità
- Scomporre i buttons in componenti a parte che mantengono tutte le funzionaliltà
```