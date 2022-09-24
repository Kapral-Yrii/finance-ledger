import style from './SectionTeam.module.scss'

export default function SectionTeam() {
    return (
        <section>
            <div>
                <p>Who we are</p>
                <h2>Our Professional Team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <ul>
                <li>
                    <picture></picture>
                    <h3>John Doe</h3>
                    <p>President</p>
                </li>
                <li>
                    <picture></picture>
                    <h3>Jane Doe</h3>
                    <p>Vice President</p>
                </li>
                <li>
                    <picture></picture>
                    <h3>Steve Smith</h3>
                    <p>Marketing Head</p>
                </li>
            </ul>
        </section>
    )
}