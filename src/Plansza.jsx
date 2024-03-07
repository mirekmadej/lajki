import lajk from './img/lajk.png';
import dislajk from './img/dislajk.png';
import './Plansza.css';
import { useState } from 'react';

function Plansza({k}) {
    let [like, setLike] = useState(0);
    let [dislike, setDislike] = useState(0);

    return(
        <div className="plansza">
            <p>
                <img className="grafika" src={k.grafika} 
                alt={k.opis} />
            </p>
            <button className='btnPlansza' onClick={funLike}>
                <img src={lajk} alt="lubię" />
            </button>
            <button className='btnPlansza' onClick={funDislike}>
                <img src={dislajk} alt="nie lubię" />
            </button>
            <p>lubi: {like}</p>
            <p>nie lubi: {dislike}</p>
            <div className='blok'>
                <div id='blok2'></div>
            </div>

        </div>
    );
    function funLike()
    {
        setLike(like+1);
        let ile = like/(like+dislike);
        ile = ile*300;
        console.log(ile);
        document.getElementById('blok2').style.width=ile+'px';

    }
    function funDislike()
    {
        setDislike(dislike+1);
        let ile = like/(like+dislike);
        ile = ile*300;
        console.log(ile);
        document.getElementById('blok2').style.width=ile+'px';
    }
}


export default Plansza
