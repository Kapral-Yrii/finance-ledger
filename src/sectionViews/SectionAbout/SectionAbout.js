import style from './SectionAbout.module.scss'

export default function SectionAbout() {
    return (
        <section id="about" className={style.section}>
            <div className={style.sectionContainer}>
                <div className={style.backgroundImgContainer}></div>
                <div className={style.textContainer}>
                    <p className={style.text}>What you are looking for</p>
                    <h2 className={style.title}>We provide bespoke solutions</h2>
                    <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                    <button className={style.button}>Read More</button>
                </div>
            </div>
        </section>
    )
}