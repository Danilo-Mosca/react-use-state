// Importo i CSS Modules Dei Bottoni
import style from '../Button.module.css';

function Button({title, selected, activeButton}) {
    return (
        // Assegno una classe CSS con un colore diverso al pulsante su cui ho cliccato
        <button type="button" className={selected ? `btn btn-primary ${style.buttonActive}` : "btn btn-primary"} onClick={activeButton}>{title}</button>
    );
}

export default Button;
