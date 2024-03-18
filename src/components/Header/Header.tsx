import style from './Header.module.css';
import React, { useEffect } from 'react';
import { ReactComponent as Burger } from '../../assets/images/burger.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as City } from '../../assets/images/city.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Profole } from '../../assets/images/profile.svg';
import { useWindowSize } from '../../hooks/index';

export const Header = () => {
    const size = useWindowSize();
    useEffect(() => {}, [size]);
    const handlerClick = () => {};
    return (
        <>
            {size.width > 1100 ? (
                <header className={style.header}>
                    <div className={style.header__logo}>
                        <button
                            className={style.header__burgerButton}
                            onClick={handlerClick}
                        >
                            <Burger />
                        </button>
                        <Logo className={style.header__logoImg} />
                    </div>
                    <form className={style.headerForm}>
                        <button
                            type="submit"
                            className={style.headerForm__button}
                        >
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
                            <p className={style.header__cityText}>
                                Санкт-Петербург
                            </p>
                        </div>
                        <button className={style.header__signin}>ВОЙТИ</button>
                    </div>
                </header>
            ) : (
                <header className={`${style.header} ${style.header__mobile}`}>
                    {' '}
                    <button
                        className={style.header__burgerButton}
                        onClick={handlerClick}
                    >
                        <Burger />
                    </button>
                    <Logo className={style.header__logoImg} />
                    <Profole />
                </header>
            )}
        </>
    );
};
