import style from './SectionContact.module.scss'
import img_JPG from '../../images/contact/contact.jpg'
import img_WEBP from '../../images/contact/contact.webp'
import img_2x_JPG from '../../images/contact/contact@2x.jpg'
import img_2x_WEBP from '../../images/contact/contact@2x.webp'
import Form from '../../components/Form/Form'

export default function SectionContact() {
    return (
        <section id="contact" className={style.section}>
            <picture>
                <source srcSet={`${img_WEBP} 1x, ${img_2x_WEBP} 2x`} type="image/webp" />
                <source srcSet={`${img_JPG} 1x, ${img_2x_JPG} 2x`} type="image/jpg" />
                <img className={style.image} src={img_JPG} alt="people" width={460}/>
            </picture>
            <Form/>
        </section>
    )
}