import style from './SectionCases.module.scss'
import cases1_JPG from '../../images/cases/cases1.jpg'
import cases1_WEBP from '../../images/cases/cases1.webp'
import cases1_2x_JPG from '../../images/cases/cases1@2x.jpg'
import cases1_2x_WEBP from '../../images/cases/cases1@2x.jpg'
import cases2_JPG from '../../images/cases/cases2.jpg'
import cases2_WEBP from '../../images/cases/cases2.webp'
import cases2_2x_JPG from '../../images/cases/cases2@2x.jpg'
import cases2_2x_WEBP from '../../images/cases/cases2@2x.jpg'
import cases3_JPG from '../../images/cases/cases3.jpg'
import cases3_WEBP from '../../images/cases/cases3.webp'
import cases3_2x_JPG from '../../images/cases/cases3@2x.jpg'
import cases3_2x_WEBP from '../../images/cases/cases3@2x.jpg'
import cases4_JPG from '../../images/cases/cases4.jpg'
import cases4_WEBP from '../../images/cases/cases4.webp'
import cases4_2x_JPG from '../../images/cases/cases4@2x.jpg'
import cases4_2x_WEBP from '../../images/cases/cases4@2x.jpg'
import cases5_JPG from '../../images/cases/cases5.jpg'
import cases5_WEBP from '../../images/cases/cases5.webp'
import cases5_2x_JPG from '../../images/cases/cases5@2x.jpg'
import cases5_2x_WEBP from '../../images/cases/cases5@2x.jpg'
import cases6_JPG from '../../images/cases/cases6.jpg'
import cases6_WEBP from '../../images/cases/cases6.webp'
import cases6_2x_JPG from '../../images/cases/cases6.jpg'
import cases6_2x_WEBP from '../../images/cases/cases6.jpg'
import '../../../node_modules/lightbox2/dist/css/lightbox.min.css'
import '../../../node_modules/lightbox2/dist/js/lightbox-plus-jquery.min'



export default function SectionCases() {
    return (
        <section id="cases" className={style.section}>
            <div className={style.container}>
                <p className={style.textAboveTitle}>This is what we do</p>
                <h2 className={style.title}>Business Cases</h2>
                <p className={style.textBelowTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
                <ul className={style.list}>
                    <li className={style.listItem}>
                        <a href={cases1_JPG} data-lightbox="gallery" data-title="discussion with the team">
                            <picture>
                                <source srcSet={`${cases1_WEBP} 1x, ${cases1_2x_WEBP} 2x`} type="image/webp" />
                                <source srcSet={`${cases1_JPG} 1x, ${cases1_2x_JPG} 2x`} type="image/jpg" />
                                <img className={style.image} src={cases1_JPG} alt="discussion with the team" width={421}/>
                            </picture>
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a href={cases2_JPG} data-lightbox="gallery" data-title="analytics">
                            <picture>
                                <source srcSet={`${cases2_WEBP} 1x, ${cases2_2x_WEBP} 2x`} type="image/webp" />
                                <source srcSet={`${cases2_JPG} 1x, ${cases2_2x_JPG} 2x`} type="image/jpg" />
                                <img className={style.image} src={cases2_JPG} alt="analytics" width={421}/>
                            </picture>
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a href={cases3_JPG} data-lightbox="gallery" data-title="agreement">
                            <picture>
                                <source srcSet={`${cases3_WEBP} 1x, ${cases3_2x_WEBP} 2x`} type="image/webp" />
                                <source srcSet={`${cases3_JPG} 1x, ${cases3_2x_JPG} 2x`} type="image/jpg" />
                                <img className={style.image} src={cases3_JPG} alt="agreement" width={421}/>
                            </picture>
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a href={cases4_JPG} data-lightbox="gallery" data-title="team spirit">
                            <picture>
                                <source srcSet={`${cases4_WEBP} 1x, ${cases4_2x_WEBP} 2x`} type="image/webp" />
                                <source srcSet={`${cases4_JPG} 1x, ${cases4_2x_JPG} 2x`} type="image/jpg" />
                                <img className={style.image} src={cases4_JPG} alt="team spirit" width={421}/>
                            </picture>
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a href={cases5_JPG} data-lightbox="gallery" data-title="work process">
                            <picture>
                                <source srcSet={`${cases5_WEBP} 1x, ${cases5_2x_WEBP} 2x`} type="image/webp" />
                                <source srcSet={`${cases5_JPG} 1x, ${cases5_2x_JPG} 2x`} type="image/jpg" />
                                <img className={style.image} src={cases5_JPG} alt="work process" width={421}/>
                            </picture>
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a href={cases6_JPG} data-lightbox="gallery" data-title="buildings">
                            <picture>
                                <source srcSet={`${cases6_WEBP} 1x, ${cases6_2x_WEBP} 2x`} type="image/webp" />
                                <source srcSet={`${cases6_JPG} 1x, ${cases6_2x_JPG} 2x`} type="image/jpg" />
                                <img className={style.image} src={cases6_JPG} alt="buildings" width={421}/>
                            </picture>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}