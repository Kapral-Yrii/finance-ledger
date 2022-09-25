import style from './SectionsBlog.module.scss'
import img_JPG from '../../images/blog/blog.jpg'
import img_WEBP from '../../images/blog/blog.webp'
import img_2x_JPG from '../../images/blog/blog@2x.jpg'
import img_2x_WEBP from '../../images/blog/blog@2x.webp'

export default function SectionBlog() {
    return (
        <article id="blog" className={style.article}>
            <picture>
                <source srcSet={`${img_WEBP} 1x, ${img_2x_WEBP} 2x`} type="image/webp" />
                <source srcSet={`${img_JPG} 1x, ${img_2x_JPG} 2x`} type="image/jpg" />
                <img className={style.image} src={img_JPG} alt="people" width={460}/>
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