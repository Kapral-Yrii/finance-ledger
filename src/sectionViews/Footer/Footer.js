import style from './Footer.module.scss'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.links}><SocialLinks /></div>
            <p className={style.text}>Copyright © 2021 - FinanceLedger</p>
        </footer>)
}