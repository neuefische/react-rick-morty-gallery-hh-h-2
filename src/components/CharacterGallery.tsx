import CharacterCardComponent from "./CharacterCardComponent";
import {Character} from "../model/Character";
import "./CharacterGallery.css";

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(
    {characters}: CharacterGalleryProps) {
    const characterComponents = characters.map((character) => {
        return (<div className="card">
            <CharacterCardComponent
                key={character.id}
                character={character}/>
        </div>)
    })

    return (
        <div>
            <h1>Rick and Morty Character Gallery</h1>

            <div className="cards">
                {characterComponents}
            </div>
        </div>
    )
}