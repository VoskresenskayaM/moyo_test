import { SubmitHandler, useForm } from 'react-hook-form';
import style from './LoginForm.module.css';

interface ILoginForm {
    email: string;
    password: string;
}
export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty },
        reset,
    } = useForm<ILoginForm>({
        mode: 'onChange',
    });
    const submit: SubmitHandler<ILoginForm> = (data) => {
        reset();
    };
    return (
        <form
            noValidate
            onSubmit={handleSubmit(submit)}
            className={style.loginform}
        >
            <input
                className={
                    errors.email
                        ? `${style.loginform__input} ${style.loginform__inputError} `
                        : `${style.loginform__input}`
                }
                type="email"
                placeholder="Email"
                {...register('email', {
                    required: 'Это обязательное поле',
                    pattern: {
                        message: 'Email не соответствует формату',
                        value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
                    },
                })}
            />
            <div className={style.loginform__errorBlock}>
                {errors.email && (
                    <span className={style.loginform__error}>
                        {errors.email.message}
                    </span>
                )}
            </div>
            <input
                className={
                    errors.password
                        ? `${style.loginform__input} ${style.loginform__inputError} `
                        : `${style.loginform__input}`
                }
                type="password"
                placeholder="Пароль"
                {...register('password', {
                    required: 'Это обязательное поле',
                    pattern: {
                        message: 'Пароль не соответствует формату',
                        value: /(?=.*[0-9])(?=.*[$%&_#])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$%&_#]{8,}/g,
                    },
                })}
            />
            <div className={style.loginform__errorBlock}>
                {errors.password && (
                    <span className={style.loginform__error}>
                        {errors.password.message}
                    </span>
                )}
            </div>
            <button
                className={
                    isValid && isDirty
                        ? `${style.loginform__button} ${style.loginform__buttonActive} `
                        : `${style.loginform__button}`
                }
                type="submit"
            >
                ВОЙТИ
            </button>
        </form>
    );
};
