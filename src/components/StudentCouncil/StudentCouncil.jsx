import './studentCouncil.scss'
import Student from './StudList'

export default function StudentCouncil() {

return(
    
    <section className="studentCouncil">
        
    <h1>✉ Elevråd</h1>
    
    <h2>Webudvikler</h2>
    <Student 
    name="Katrine"
    email= "kat5252@elev.techcollege.dk"
    key= "stud0"></Student>

    <Student 
    name= 'Trayana'
    email= "tray0006@elev.techcollege.dk"
    key= "stud1"></Student>

    <h2>Mediegrafiker</h2>

    <Student 
    name= 'Søs'
    email= "soes1528@elev.techcollege.dk"
    key= "stud2"
    />
    

    <Student 
    name= 'Peter'
    email= "pete59q9@elev.techcollege.dk"
    key= "stud3"
    />

    <h2>Grafisk Tekniker</h2>

    <Student 
    name= 'Emma'
    email= "emme8282@elev.techcollege.dk"
    key= "stud4"
    />
    

    <Student 
    name= 'Buster'
    email= "bust0167@elev.techcollege.dk"
    key= "stud5"
    />
   
    </section>
)}