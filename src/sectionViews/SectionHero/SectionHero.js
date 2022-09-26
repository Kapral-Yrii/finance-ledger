import style from './SectionHero.module.scss'
import sprite from '../../images/sprite.svg'

export default function SectionHero() {

    return (
        <div className={style.container} id="home">
            <h1 className={style.mainTitle}>The Sky Is The Limit</h1>
            <p className={style.text}>We provide world class financial assistance</p>
            <button className={style.button}>
                <svg className={style.icon}>
                    <use href={`${sprite}#icon-arrow`}></use>
                </svg>
                Read More
            </button>
        </div>
    )
}