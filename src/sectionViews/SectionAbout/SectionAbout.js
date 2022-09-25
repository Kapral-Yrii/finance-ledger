import style from './SectionAbout.module.scss'
import img_JPG from '../../images/about/people.jpg'
import img_WEBP from '../../images/about/people.webp'
import img_2x_JPG from '../../images/about/people@2x.jpg'
import img_2x_WEBP from '../../images/about/people@2x.webp'


export default function SectionAbout() {
    return (
        <section id="about" className={style.section}>
            <picture>
                <source srcSet={`${img_WEBP} 1x, ${img_2x_WEBP} 2x`} type="image/webp" />
                <source srcSet={`${img_JPG} 1x, ${img_2x_JPG} 2x`} type="image/jpg" />
                <img className={style.image} src={img_JPG} alt="people" width={460}/>
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