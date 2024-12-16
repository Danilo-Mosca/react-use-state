// Importo i CSS Modules Dei Bottoni
import style from '../Button.module.css';

function Button({title}) {
    return (
        <button type="button" className="btn btn-primary">{title}</button>
    );
}

export default Button;
