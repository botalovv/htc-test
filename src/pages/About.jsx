import React from 'react';
import Navbar from "../сomponents/Navbar";

const About = () => {
    return (
        <div className="about">
            <Navbar/>
            <h1 className="about__title">
                О проекте
            </h1>
            <p className="about__paragraph">
                Данный проект создан по мотивам приключений Рика и Морти. Здесь вы можете поближе познакомиться со всеми персонажами, эпизодами и локациями данного мультсериала.
            </p>
            <p className="about__paragraph">
                Проект является тестовым заданием для входящих кандидатов пула Frontend. В зависимости от грейда кандидата необходимо выполнить соответствующий список заданий. Желаем удачи!
            </p>
        </div>
    );
};

export default About;