import './studentCouncil.scss'
const webStudentArr = [
    { name: 'Katrine', email: 'kat5252@elev.techcollege.dk', key: 'stud0' },
    { name: 'Trayana', email: 'tray0006@elev.techcollege.dk', key: 'stud1' }
]
const medieStudentArr = [
    { name: 'Søs', email: 'soes1528@elev.techcollege.dk', key: 'stud2' },
    { name: 'Peter', email: 'pete59q9@elev.techcollege.dk', key: 'stud3' }
]
const grafiStudentArr = [
    { name: 'Emma', email: 'emme8282@elev.techcollege.dk', key: 'stud4' },
    { name: 'Buster', email: 'bust0167@elev.techcollege.dk', key: 'stud5' }
]

export const StudentCouncil = () => {
    return (
        <section className="studentCouncil">
            <h1>✉ Elevråd</h1>
            {/* //WEBUDVIKLER */}
            <article>
                <h2>Webudvikler</h2>
                <hr></hr>
                {webStudentArr && webStudentArr.map((item, key) => {
                    return (
                        <ol key={key}>
                            <li className='name'>{item.name}</li>
                            <li>{item.email}</li>
                        </ol>
                    )
                })}
            </article>
            {/* //MEDIEGRAFIKER */}
            <article >
                <h2>Mediegrafiker</h2>
                <hr></hr>
                {medieStudentArr && medieStudentArr.map((item, key) => {
                    return (
                        <ol key={key}>
                            <li className='name'>{item.name}</li>
                            <li>{item.email}</li>
                        </ol>
                    )
                }
                )
                }
            </article>
            {/* //GRAFISK TEKNIKER */}
            <article >
                <h2>Grafisk Tekniker</h2>
                <hr></hr>
                {grafiStudentArr && grafiStudentArr.map((item, key) => {
                    return (
                        <ol key={key}>
                            <li className='name'>{item.name}</li>
                            <li>{item.email}</li>
                        </ol>
                    )
                })}
            </article>
        </section>
    )
}