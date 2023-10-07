import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import Header from '../Header/Header';
function Profile() {
    return (
        <> <Header loggedIn={true} />
            <div className="profile">
                <h2 className="profile__header">Привет, Мария!</h2>
                <form className="profile__form" >
                    <div className="profile__container">
                        <label className="profile__label_name">Имя</label>
                        <input
                            className="profile__input"
                            type="text"
                            placeholder="Мария"
                            name="name"
                            required
                            minLength={5}
                            maxLength={50}
                        />

                    </div>
                    <div className="profile__container">
                        <label className="profile__label_email">E-mail</label>
                        <input
                            className="profile__input"
                            type="email"
                            placeholder="Введите E-mail"
                            name="email"
                            required
                            minLength={5}
                            maxLength={50}
                        />
                    </div>
                </form>
                <div className="profile__links">
                    <button className="profile__save" type="submit">Редактировать</button>
                    <Link className="profile__exit" to="/">Выйти из аккаунта</Link>
                </div>
            </div>
        </>
    )
}

export default Profile;