import SectionHero from "../SectionHero/SectionHero"
import SectionAbout from "../SectionAbout/SectionAbout"
import SectionCases from "../SectionCases/SectionCases"
import SectionBlog from "../SectionBlog/SectionBlog"
import SectionContact from "../SectionContact/SectionContact"

export default function MainContent() {
    return (
        <main>
            <SectionHero/>
            <SectionAbout/>
            <SectionCases/>
            <SectionBlog/>
            <SectionContact/>
        </main>
    )
}