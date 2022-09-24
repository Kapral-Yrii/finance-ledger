import style from './Header.module.scss'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
// import { useEffect, useRef, useState, useMemo } from 'react'

export default function Header({styleBackground}) {
    // const headerRef = useRef(null)
    // const [isScrolled, setIsScrolled] = useState(false)

    // const callbackFunction = (entries) => {
    //     const [entry] = entries
    //     setIsScrolled(entry.isIntersecting)
    // }
    // const options = useMemo(() => {
    //     return {
    //     root: document,
    //     rootMargin: `${ window.innerWidth > 767 ? '70px 0px 0px 0px' : '120px 0px 0px 0px'}`,
    //     threshold: 1  
    //     }
    // }, [])

    // useEffect(() => {
    //     const observer = new IntersectionObserver(callbackFunction, options)
    //     if (headerRef.current) observer.observe(headerRef.current)

    //     return () => {
    //         if (headerRef.current) observer.unobserve(headerRef.current)
    //     }
    // }, [headerRef, options])

    return (
        <header
            className={style.header}
            // ref={headerRef}
            // style={!isScrolled ? {backgroundColor: 'rgba(51, 51, 51, 0.8)'} : {backgroundColor: 'transparent'}}
            style={styleBackground}
        >
            <Logo /> 
            <Navigation />
        </header>
    )
}