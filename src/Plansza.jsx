import lajk from './img/lajk.png';
import dislajk from './img/dislajk.png';
import './Plansza.css';
function Plansza({k}) {
    return(
        <div className="plansza">
            <p>
                <img className="grafika" src={k.grafika} 
                alt={k.opis} />
            </p>
            <button className='btnPlansza'>
                <img src={lajk} alt="lubię" />
            </button>
            <button className='btnPlansza'>
                <img src={dislajk} alt="nie lubię" />
            </button>
            <p>lubi: 0</p>
            <p>nie lubi: 0</p>

        </div>
    );
}
export default Plansza
