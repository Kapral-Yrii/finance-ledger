import style from './SectionsBlog.module.scss'
import imgJpg from '../../images/blog/blog.jpg'
import imgWebp from '../../images/blog/blog.webp'
import imgJpg2x from '../../images/blog/blog@2x.jpg'
import imgWebp2x from '../../images/blog/blog@2x.webp'

export default function SectionBlog() {
    return (
        <article id="blog">
            <picture className={style.picture}>
                <source srcSet={`${imgWebp} 1x, ${imgWebp2x} 2x`} type="image/webp" />
                <source srcSet={`${imgJpg} 1x, ${imgJpg2x} 2x`} type="image/jpg" />
                <img className={style.image} src="imgJpg" alt="people" width={460}/>
            </picture>
            <div className={style.container}>
                <p className={style.text}>April 16 2020</p>
                <h2 className={style.title}>Blog Post One</h2>
                <p className={style.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button className={style.button}>Read Our Blog</button>
            </div>
        </article>
    )
}