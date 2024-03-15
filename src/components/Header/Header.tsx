import style from './Header.module.css';
import React from 'react';
import { ReactComponent as Burger } from '../../assets/images/burger.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as City } from '../../assets/images/city.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';

export const Header = () => {
    const handlerClick = () => {};
    return (
        <header className={style.header}>
            <div className={style.header__logo}>
                <button
                    className={style.header__burgerButton}
                    onClick={handlerClick}
                >
                    <Burger />
                </button>
                <Logo />
            </div>
            <form className={style.headerForm}>
                <button type="submit" className={style.headerForm__button}>
                    <Search />
                </button>
                <input
                    type="text"
                    placeholder="Поиск"
                    className={style.headerForm__input}
                />
            </form>

            <div className={style.header__cityContainer}>
                <div className={style.header__city}>
                    <City className={style.header__cityArrow} />
                    <p className={style.header__cityText}>Санкт-Петербург</p>
                </div>
                <button className={style.header__signin}>ВОЙТИ</button>
            </div>
        </header>
    );
};
