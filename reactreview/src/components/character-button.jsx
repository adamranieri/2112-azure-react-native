

export default function CharacterBtn(props){
    console.log(props)
    const showCharacter = props.showCharacter
    const name = props.name

    return(<>
        <button onClick={showCharacter}>{name}</button>
    </>)
}