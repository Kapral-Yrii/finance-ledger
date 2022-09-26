import style from './Navigation.module.scss'

export default function Navigation() {
    return (
        <nav className={style.navigate}>
            <ul className={style.list}>
                <li><a className={style.link} href="#home">Home</a></li>
                <li><a className={style.link} href="#about">About</a></li>
                <li><a className={style.link} href="#cases">Cases</a></li>
                <li><a className={style.link} href="#blog">Blog</a></li>
                <li><a className={style.link} href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}