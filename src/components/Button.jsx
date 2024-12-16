// Importo i CSS Modules Dei Bottoni
import style from '../Button.module.css';

function Button({title, selected, activeButton}) {
    return (
        <button type="button" className="btn btn-primary" onClick={activeButton}>{title}</button>
    );
}

export default Button;
