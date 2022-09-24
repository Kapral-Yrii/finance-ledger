import Container  from './components/Container/Container'
import Header from './sectionViews/Header/Header'
import SectionHero from './sectionViews/SectionHero/SectionHero'
import SectionAbout from './sectionViews/SectionAbout/SectionAbout'
import SectionCases from './sectionViews/SectionCases/SectionCases' 
import SectionBlog from './sectionViews/SectionBlog/SectionBlog'
import SectionTeam from './sectionViews/SectionTeam/SectionTeam'
import SectionContact from './sectionViews/SectionContact/SectionContact'
import Footer from './sectionViews/Footer/Footer';
import { useEffect, useRef, useState, useMemo } from 'react'

function App() {
  const heroRef = useRef(null)
  const [isScrolled, setIsScrolled] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsScrolled(entry.isIntersecting)
  }

  const options = useMemo(() => {
    return {
    rootMargin: `${ window.innerWidth > 767 ? '70px 0px 0px 0px' : '120px 0px 0px 0px'}`,
    threshold: 1
    }
  }, [])
  
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
        if (heroRef.current) observer.observe(heroRef.current)

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current)
        }
    }, [heroRef, options])

  return (
    <Container>
      <Header styleBackground={!isScrolled ? {backgroundColor: 'rgba(51, 51, 51, 0.8)'} : {backgroundColor: 'transparent'}} />
      <main >
        <div ref={heroRef}>
          <SectionHero/>
        </div> 
        <SectionAbout/>
        <SectionCases/>
        <SectionBlog />
        <SectionTeam/>
        <SectionContact/>
      </main>
      <Footer/>
    </Container>
  );
}

export default App;
