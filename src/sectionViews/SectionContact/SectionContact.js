import style from './SectionContact.module.scss'
import Form from '../../components/Form/Form'

export default function SectionContact() {
    return (
        <section id="contact" className={style.section}>
            <div className={style.container}>
                <div className={style.backgroundImgContainer}></div>
                <Form />
            </div>
        </section>
    )
}