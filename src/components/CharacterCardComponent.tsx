import "./CharacterCard.css"
import {Character} from "../model/Character";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCardComponent(
    {character}: CharacterCardProps)
{
    return(
        <div className="character-card">
            <h3>{character.name}</h3>
            <img src={character.image} />
            <p>{character.status}</p>
        </div>
    )
}