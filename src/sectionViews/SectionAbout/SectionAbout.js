import style from './SectionAbout.module.scss'
import imgJpg from '../../images/about/people.jpg'
import imgWebp from '../../images/about/people.webp'
import imgJpg2x from '../../images/about/people@2x.jpg'
import imgWebp2x from '../../images/about/people@2x.webp'


export default function SectionAbout() {
    return (
        <section id="about">
            <picture className={style.picture}>
                <source srcSet={`${imgWebp} 1x, ${imgWebp2x} 2x`} type="image/webp" />
                <source srcSet={`${imgJpg} 1x, ${imgJpg2x} 2x`} type="image/jpg" />
                <img className={style.image} src="imgJpg" alt="people" width={460}/>
            </picture>
            <div className={style.container}>
                <p className={style.text}>What you are looking for</p>
                <h2 className={style.title}>We provide bespoke solutions</h2>
                <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button className={style.button}>Read More</button>
            </div>
        </section>
    )
}