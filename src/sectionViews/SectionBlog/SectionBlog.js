import style from './SectionsBlog.module.scss'

export default function SectionBlog() {
    return (
        <article id="blog" className={style.article}>
            <div className={style.sectionContainer}>
                <div className={style.textContainer}>
                    <p className={style.text}>April 16 2020</p>
                    <h2 className={style.title}>Blog Post One</h2>
                    <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                    <button className={style.button}>Read Our Blog</button>
                </div>
                <div className={style.backgroundImgContainer}></div>
            </div>
        </article>
    )
}