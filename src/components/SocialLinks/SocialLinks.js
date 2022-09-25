import style from './SocialLinks.module.scss'
import sprite from '../../images/sprite.svg'

export default function SocialLinks({
    facebook = "https://www.facebook.com",
    twitter = "https://www.twitter.com",
    youtube = "https://www.youtube.com",
    linkedin = "https://www.linkedin.com",
    hoverColorLight = false }) {
    
    return (
        <div className={style.container}>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <a
                    className={style.link}
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg className={hoverColorLight ? style.iconHoverLight : style.icon}
                        >
                            <use href={`${sprite}#icon-facebook`}></use>
                        </svg>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a
                    className={style.link}
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg className={hoverColorLight ? style.iconHoverLight : style.icon}>
                            <use href={`${sprite}#icon-twitter`}></use>
                        </svg>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a
                    className={style.link}
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg className={hoverColorLight ? style.iconHoverLight : style.icon}>
                            <use href={`${sprite}#icon-youtube`}></use>
                        </svg>
                    </a>
                </li>
                <li className={style.listItem}>
                    <a
                    className={style.link}
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer">
                        <svg className={hoverColorLight ? style.iconHoverLight : style.icon}>
                            <use href={`${sprite}#icon-linkedin`}></use>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    )
}