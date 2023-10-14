import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Error from '../Error/Error';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import InfoTooltipUpdate from '../InfoToolTipUpdate/InfoToolTipUpdate';
import * as api from '../../utils/MainApi';
import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [savedMovies, setSavedMovies] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isInfoToolTipPopupOpen, setInfoToolTipPopupOpen] = useState(false);
    const [isInfoToolTipUpdatePopupOpen, setInfoToolTipUpdatePopupOpen] = useState(false);
    const isOpen = isInfoToolTipPopupOpen || isInfoToolTipUpdatePopupOpen;

    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();

    function registration({ name, email, password }) {
        setIsLoading(true);
        api.register(name, email, password)
            .then(() => {
                setInfoToolTipPopupOpen(true);
                setIsSuccess(true);
                authorization({ email, password });
            })
            .catch(err => {
                setInfoToolTipPopupOpen(true);
                setIsSuccess(false);
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function authorization({ email, password }) {
        setIsLoading(true);
        api.authorize(email, password)
            .then(res => {
                if (res) {
                    setInfoToolTipPopupOpen(true);
                    setIsSuccess(true);
                    localStorage.setItem('jwt', res.token);
                    navigate('/movies', { replace: true });
                    setIsLoggedIn(true);
                }
            })
            .catch(err => {
                setInfoToolTipPopupOpen(true);
                setIsSuccess(false);
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function setEditUserInfo(newUserInfo) {
        setIsLoading(true);
        api.editProfileUserInfo(newUserInfo)
            .then(data => {
                setInfoToolTipUpdatePopupOpen(true);
                setIsUpdate(true);
                setCurrentUser(data);
            })
            .catch(err => {
                setInfoToolTipUpdatePopupOpen(true);
                setIsUpdate(false);
                console.log(err);
                setErrorAuthorization(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    function setLikeCard(card) {
        api.addNewCard(card)
            .then(newLikeMovie => {
                setSavedMovies([newLikeMovie, ...savedMovies]);
            })
            .catch(err => {
                setIsSuccess(false);
                console.log(err);
                setErrorAuthorization(err);
            });
    }

    function setDeleteLikeCard(card) {
        api.removeCard(card._id)
            .then(() => {
                setSavedMovies(state => state.filter(item => item._id !== card._id));
            })
            .catch(err => {
                setIsSuccess(false);
                console.log(err);
                setErrorAuthorization(err);
            });
    }

    function setErrorAuthorization(err) {
        if (err === 'Error: 401') {
            setSignOut();
        }
    }

    const setSignOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('movieSearch');
        localStorage.removeItem('allMovies');
        localStorage.removeItem('shortMovies');
        localStorage.clear();
        navigate('/');
    };

    function closeAllPopups() {
        setInfoToolTipPopupOpen(false);
        setInfoToolTipUpdatePopupOpen(false);
    }

    function closeByOverlay(event) {
        if (event.target === event.currentTarget) {
            closeAllPopups();
        }
    }

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            api.getContent(jwt)
                .then(res => {
                    if (res) {
                        localStorage.removeItem('allMovies');
                        setIsLoggedIn(true);
                    }
                    navigate(path);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            api.getCurrentUserInfo()
                .then(userInfo => {
                    setCurrentUser(userInfo);
                })
                .catch(err => {
                    console.log(err);
                });
            api.getMovies()
                .then(cardsData => {
                    setSavedMovies(cardsData.reverse());
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [isLoggedIn]);

    useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', closeByEscape);
            return () => {
                document.removeEventListener('keydown', closeByEscape);
            };
        }
    }, [isOpen]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="root">
                <div className="root__content">
                    <Routes>
                        <Route
                            path={'/'}
                            element={
                                <>
                                    <Header loggedIn={isLoggedIn} />
                                    <Main />
                                    <Footer />
                                </>
                            }
                        />

                        <Route
                            path={'/movies'}
                            element={
                                <ProtectedRoute
                                    path="/movies"
                                    component={Movies}
                                    loggedIn={isLoggedIn}
                                    savedMovies={savedMovies}
                                    handleLikeFilm={setLikeCard}
                                    onremoveCard={setDeleteLikeCard}
                                />
                            }
                        />

                        <Route
                            path={'/saved-movies'}
                            element={
                                <ProtectedRoute
                                    path="/saved-movies"
                                    loggedIn={isLoggedIn}
                                    savedMovies={savedMovies}
                                    onremoveCard={setDeleteLikeCard}
                                    component={SavedMovies}
                                />
                            }
                        />

                        <Route
                            path={'/profile'}
                            element={
                                <ProtectedRoute
                                    path="/profile"
                                    component={Profile}
                                    loggedIn={isLoggedIn}
                                    isLoading={isLoading}
                                    onUpdateUser={setEditUserInfo}
                                    signOut={setSignOut}
                                />
                            }
                        />

                        <Route
                            path={'/signin'}
                            element={
                                isLoggedIn ? (
                                    <Navigate to="/movies" replace />
                                ) : (
                                    <Login isLoading={isLoading} onAuthorization={authorization} />
                                )
                            }
                        />

                        <Route
                            path={'/signup'}
                            element={
                                isLoggedIn ? (
                                    <Navigate to="/movies" replace />
                                ) : (
                                    <Register isLoading={isLoading} onRegister={registration} />
                                )
                            }
                        />

                        <Route path={'*'} element={<Error />} />
                    </Routes>

                    <InfoTooltip
                        isOpen={isInfoToolTipPopupOpen}
                        isSuccess={isSuccess}
                        onClose={closeAllPopups}
                        onCloseOverlay={closeByOverlay}
                    />

                    <InfoTooltipUpdate
                        isOpen={isInfoToolTipUpdatePopupOpen}
                        isUpdate={isUpdate}
                        onClose={closeAllPopups}
                        onCloseOverlay={closeByOverlay}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}
export default App;
