import style from './Form.module.scss'
import sprite from '../../images/sprite.svg'
import { useForm } from "react-hook-form";
import { useCallback } from 'react';


export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    
    const onSubmit = useCallback((data) => {
        console.log(data);  
    }, [])

    return (
        <div className={style.formContainer}>
            <h2 className={style.title}>Request Callback</h2>
            <form name="contact" method="post" action="/contact" className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="form-name" value="contact" />
                <div className={style.inputField}>
                    <input className={style.input} id="user_name" type="text" name="name" placeholder=' '/>
                    <label className={style.label} htmlFor="user_name">Enter your name</label>
                </div>
                <div className={style.inputField}>
                    <input className={style.input} id="user_email" type="email" name="email" placeholder=' ' {...register("email", { required: true })} />
                    <label className={style.label} htmlFor="user_email">Enter email*</label>
                    {errors.email &&
                        <span className={style.error}>
                            <svg className={style.errorIcon}>
                                <use href={`${sprite}#icon-worning`}></use>
                            </svg>
                            This is a required field
                        </span>}
                </div>
              <button className={style.button} type="submit">Send</button>
            </form>
        </div>
    )
}