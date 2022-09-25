import style from './Form.module.scss'
import sprite from '../../images/sprite.svg'
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
    console.log(data);
  };
    return (
        <div className={style.formContainer}>
            <h2 className={style.title}>Request Callback</h2>
            <form name="signup_form" className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={style.inputField}>
                    <input className={style.input} type="text" name="name" placeholder=' '/>
                    <label className={style.label}>Enter your name</label>
                </div>
                <div className={style.inputField}>
                    <input className={style.input} type="email" name="email" placeholder=' ' {...register("email", { required: true })} />
                    <label className={style.label}>Enter email*</label>
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