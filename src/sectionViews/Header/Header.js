import style from './Header.module.scss'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'

export default function Header({styleBackground}) {

    return (
        <header
            className={style.header}
            style={styleBackground}
        >
            <Logo /> 
            <Navigation />
        </header>
    )
}