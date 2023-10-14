import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="project" id="about-project">
            <h2 className="project__header">О проекте</h2>
            <div className="project__container">
                <div className="project__info">
                    <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="project__info">
                    <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project__deadlines">
                <p className="project__time">1 неделя</p>
                <p className="project__text">Back-end</p>
                <p className="project__time">4 недели</p>
                <p className="project__text">Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;