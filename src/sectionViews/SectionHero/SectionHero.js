import style from './SectionHero.module.scss'

export default function SectionHero() {

    return (
        <div className={style.container} id="home">
            <h1 className={style.mainTitle}>The Sky Is The Limit</h1>
            <h2 className={style.title}>We provide world class financial assistance</h2>
            <button className={style.button}>Read More</button>
        </div>
    )
}