import CharacterCard from "./CharacterCard";
import {Character} from "../model/Character";
// Wichtig! CSS importieren damit man es sieht ;)
import "./CharacterGallery.css";

// Jede Komponente die Props benutzt, braucht eine Typdefinition der Props
// Die Struktur ist immer <Komponentenname>"Props"
// Also CharacterGallery + Props = CharacterGalleryProps
// Oder
// BakeryComponent + Props = BakeryComponentProps
type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery({characters}: CharacterGalleryProps) {
    const characterComponents = characters.map((character) => {
        return (
            // Wir verpacken die CharacterCardComponent in einem <div> mit der Klasse .card

            // className = Gibt dem HTML Element die Klasse "card"
            // Im CSS kann die Klasse mit ".card" angesprochen werden
            // Zum Beispiel so
            /*
               .card {
                   text-align: center;
                   background-color: lightgray;
               }
            * */
            <div className="card">
                {/*
                    "key" ist ein besonderes Prop!
                    Wir brauchen es damit jedes Element in einer Liste eine _eindeutige_ ID hat
                     */}
                <CharacterCard
                    key={character.id}
                    character={character}/>
            </div>
        )
    })

    return (
        <div>
            <h2>Rick and Morty Character Gallery</h2>

            <div className="cards">
                {/* Hier fügen wir die ganze Liste von Komponenten auf einmal ein */}
                {characterComponents}
            </div>
        </div>
    )
}