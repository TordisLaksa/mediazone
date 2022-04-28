import { Link } from "react-router-dom"
import BackSvg from "../../Svgs/x-solid.svg"
import './Rules.scss'


const Rules = () => {
    return(
        <>
            <section className="rulesWrapper">
                <Link to='/guides'>
                    <img className="backSvg" src={BackSvg} alt="back-svg" />
                </Link>
            </section>
            <section id="sectionText">
                <header>
                    <h1>Regler på TECHCOLLEGE</h1>
                    <hr></hr>
                </header>
                <article>
                    <h2>Fredagsbar og sociale arrangmenter</h2>
                    <h3>Formål</h3>
                    <p>Principperne og reglerne skal sikre, at der i forbindelse med afholdelse af sådanne aktiviteter tages fornødent hensyn til deltagere, bygninger samt øvrige studerende, undervisere og administrativt personale.</p>
                    <p>De skal desuden medvirke til et godt samarbejde mellem de studerende, institutterne og administrationen og endelig skal de skabe klarhed omkring roller og ansvar.</p>
                
                    <h3>Rammer for arrangementerne</h3>
                    <p>Tidspunkter: <br />
                    Arrangementer er holdt fra kl 14:15 til kl 17:00 i følge skolens regler.</p>
                    <p> Oprydning og rengøring: <br />
                     alle møbler og andre ændringer på skolens interior er sat tilbage på plads efter aktiviteterne. Alle varer som er lånt fra kantinen skal afleveres så snart som mulig. </p>
                    <p>En underviser skal altid være til stede når Fredagsbar/eller andre sociale arrangmenter afholdes.</p>

                    <h3>Forsikring</h3>
                    <p>Hvis du ved et uheld kommer til at ødelægge noget under arrangementet, så kontakt straks din underviser eller leder for at hører omkring forsikring osv. </p>

                    <h3>Glemte sager</h3>
                    <p> I tilfælde af glemte sager (herunder elektronik, pung, tøj etc) kontakt venligst en elevrådsformand</p>
                </article>
                <article>
                    <h2> Skolens regler</h2>
                    <hr></hr>
                    <h3> Ordensregler for elever</h3>
                    <p>Som elev har du pligt til at forberede dig og aflevere dine opgaver og projekter til tiden. Vi forventer, at du selv skriver/udarbejder dem. Det er ikke tilladt at skrive af eller kopiere fra internettet eller fra andres opgaver. Gør du det, opfattes det som snyd, og opgaven bliver ikke bedømt.</p>
                    <p> Når du arbejder i klasselokaler skal du altid følge de anvisninger, dine lærere giver dig med hensyn til opførsel, påklædning, brug af bærbar pc og oprydning. Din påklædning skal overholde de for branchen sikkerhedsmæssige normer og regler.</p>
                    <p>  I alle værksteder og lokaler skal du altid følge og overholde sikkerhedsreglerne.</p>

                    <h3>Fravær:</h3>
                    <p>Skolen forventer, at du som elev melder dig syg eller fraværende til din lærer eller skole over Uddata+.</p>

                    <h3>Rygeregler:</h3>
                    <p>Alt form for rygning, damping og snus er ikke tilladt i skole tiden og/eller på skolens område.</p>

                    <h3>Rusmidler:</h3>
                    <p>Det er ikke tilladt at medbringe, indtage eller være påvirket af alkohol samt andre rusmidler i forbindelse med skolegangen på TECHCOLLEGE, eller hvor eleverne kan identificeres med skolerne. Dette gælder også på introture og til øvrige elevarrangementer uden for skolen.</p>

                    <h3> Volds Politik:</h3>
                    <p>Ingen vold eller mobning, både fysisk og psykisk. Hvis du eller andre oplever dette har du pligt til at melde det strakst til den nærmeste underviser eller leder.</p>

                    <h3>It-regler:</h3>
                    <p>Beskyt dit brugernavn og din adgangskode - misbrug ikke andres. Brug kun computerne til undervisningsformål i undervisningstiden. Gem selv dine filer. Du må ikke ændre opsætning eller udseende på skolens computere. Skolens netværk må ikke bruges til nogen form for aktivitet, der er forbudt ifølge dansk lovgivning (fx downloade og installere musikfiler, der bryder ophavsret).</p>

                    <h3>Overtrædelse af skolens regler kan medføre:</h3>
                    <ul>
                        <li>Mundtlig eller skriftlig advarsel</li>
                        <li>Midlertidig udelukkelse fra arrangementer (fester, studieture og lign.)</li>
                        <li> Bortvisning i op til fem dage (bliver registreret som fravær)</li>
                        <li>Bortvisning fra uddannelsen</li>
                    </ul>

                </article>
            </section>
        </>
    )
}
export default Rules