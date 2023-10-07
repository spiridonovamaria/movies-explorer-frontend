import React from 'react';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useState } from 'react';


function Movies() {
    const [loggedIn] = useState(false);
    return (
        <main>
            <Header loggedIn={loggedIn} />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    );
}

export default Movies;