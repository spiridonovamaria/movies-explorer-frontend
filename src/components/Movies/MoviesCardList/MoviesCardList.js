import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Cards from '../../../utils/Cards';

function MoviesCardList() {
    return (
        <section className="cards">
            <div className="cards__container">
                {Cards.map((card) =>
                    (<MoviesCard duration={card.duration} image={card.image} nameRU={card.nameRU} key={card._id} />))}
            </div>
        </section>
    );
}

export default MoviesCardList;