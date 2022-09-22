import "./CharacterCard.css"
import {Character} from "../model/Character";

// Jede Komponente die Props benutzt, braucht eine Typdefinition der Props
// Die Struktur ist immer <Komponentenname>"Props"
// Also CharacterCard + Props = CharacterCardProps
type CharacterCardProps = {
    character: Character
}

export default function CharacterCard({character}: CharacterCardProps) {
    return (
        <div className="character-card">
            <h3>{character.name}</h3>
            <img src={character.image}/>
            <p>{character.status}</p>
        </div>
    )
}