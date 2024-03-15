import { LoginForm } from '../../components/index';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as VK } from '../../assets/images/VK.svg';
import { ReactComponent as Gmail } from '../../assets/images/G.svg';
import { ReactComponent as Yandex } from '../../assets/images/Я.svg';

import style from './LoginPage.module.css';

export const LoginPage = () => {
    return (
        <main className={style.loginPage}>
            <Logo className={style.loginPage__logo} />
            <LoginForm />
            <p className={style.loginPage__text}>Забыли пароль?</p>
            <div className={style.loginPage__messangers}>
                <div className={style.loginPage__messanger}>
                    <VK />
                </div>
                <div className={style.loginPage__messanger}>
                    <Gmail />
                </div>
                <div className={style.loginPage__messanger}>
                    <Yandex />
                </div>
            </div>
            <p className={style.loginPage__account}>Еще нет аккаунта?</p>
            <p className={style.loginPage__reg}>Зарегистрироваться</p>
        </main>
    );
};
