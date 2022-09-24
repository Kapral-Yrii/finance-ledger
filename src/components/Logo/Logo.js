import style from './Logo.module.scss'
import sprite from '../../images/sprite.svg'

export default function Logo() {
    return (
        <div className={style.logo}>
            <svg className={style.icon}>
                <use href={`${sprite}#icon-logo`}></use>
            </svg>
            <span className={style.finance}>Finance</span>
            <span className={style.ledger}>Ledger</span>
        </div>
    )
}