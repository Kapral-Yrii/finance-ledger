import style from './SectionTeam.module.scss'
import person1_JPG from '../../images/team/person1.jpg'
import person1_WEBP from '../../images/team/person1.webp'
import person1_2x_JPG from '../../images/team/person1@2x.jpg'
import person1_2x_WEBP from '../../images/team/person1@2x.webp'
import person2_JPG from '../../images/team/person2.jpg'
import person2_WEBP from '../../images/team/person2.webp'
import person2_2x_JPG from '../../images/team/person2@2x.jpg'
import person2_2x_WEBP from '../../images/team/person2@2x.webp'
import person3_JPG from '../../images/team/person3.jpg'
import person3_WEBP from '../../images/team/person3.webp'
import person3_2x_JPG from '../../images/team/person3@2x.jpg'
import person3_2x_WEBP from '../../images/team/person3@2x.webp'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

export default function SectionTeam() {
    return (
        <section>
            <div className={style.container}>
                <p className={style.textAboveTitle}>Who we are</p>
                <h2 className={style.title}>Our Professional Team</h2>
                <p className={style.textBelowTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <ul className={style.list}>
                <li className={style.listItem}>
                    <div className={style.imgContainer}>
                        <picture>
                            <source srcSet={`${person1_WEBP} 1x, ${person1_2x_WEBP} 2x`} type="image/webp" />
                            <source srcSet={`${person1_JPG} 1x, ${person1_2x_JPG} 2x`} type="image/jpg" />
                            <img className={style.image} src={person1_JPG} alt="John Doe" width={421}/>
                        </picture>
                        <div className={style.imgLink}>
                            <SocialLinks hoverColorLight/>
                        </div>
                    </div>
                    <h3 className={style.name}>John Doe</h3>
                    <p className={style.position}>President</p>
                </li>
                <li>
                    <div className={style.imgContainer}>
                        <picture>
                            <source srcSet={`${person2_WEBP} 1x, ${person2_2x_WEBP} 2x`} type="image/webp" />
                            <source srcSet={`${person2_JPG} 1x, ${person2_2x_JPG} 2x`} type="image/jpg" />
                            <img className={style.image} src={person2_JPG} alt="John Doe" width={421}/>
                        </picture>
                        <div className={style.imgLink}>
                            <SocialLinks hoverColorLight/>
                        </div>
                    </div>
                    <h3 className={style.name}>Jane Doe</h3>
                    <p className={style.position}>Vice President</p>
                </li>
                <li>
                    <div className={style.imgContainer}>
                        <picture>
                            <source srcSet={`${person3_WEBP} 1x, ${person3_2x_WEBP} 2x`} type="image/webp" />
                            <source srcSet={`${person3_JPG} 1x, ${person3_2x_JPG} 2x`} type="image/jpg" />
                            <img className={style.image} src={person3_JPG} alt="John Doe" width={421}/>
                        </picture>
                        <div className={style.imgLink}>
                            <SocialLinks hoverColorLight/>
                        </div>
                    </div>
                    <h3 className={style.name}>Steve Smith</h3>
                    <p className={style.position}>Marketing Head</p>
                </li>
            </ul>
        </section>
    )
}