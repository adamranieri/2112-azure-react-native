import { useState } from "react"
import CharacterBtn from "./character-button"

export default function MeCharacterViewer(){

    
    const [companion,setCompanion] = useState({name:"Tali", species:"Quarian", role:"Tech"})

    function showTali(){
        const tali = {name:"Tali", species:"Quarian", role:"Tech"}
        setCompanion(tali)
    }

    function showWrex(){
        const wrex = {name:"Wrex", species:"Krogan", role:"Tank"}
        setCompanion(wrex)
    }

    function showGarrus(){
        const garrus = {name:"Garrus", species:"Turian", role:"Sniper"}
        setCompanion(garrus)
    }

    function showLiara(){
        const liara = {name:'Liara', species:"Asari"}
        setCompanion(liara)
        console.log(companion)
    }

    function showAshley(){
        companion.name = "Ashley";
        companion.role = "Soldier";
        companion.species = "Human";
        setCompanion(companion)// no no
    }

    function showMiranda(){
        const miranda = {name:"Miranda", species:"Human", role:"Cerberus Shill"};
        setCompanion(miranda)
    }

    return(<>
        <h2>Charater info viwer</h2>
        <h5>Name: {companion.name}</h5>
        <h5>Species: {companion.species}</h5>
        <h5>Role: {companion.role ?? "wildcard"}</h5>
        <button onClick={showTali}>Tali</button>
        <button onClick={showWrex}>Wrex</button>
        <button onClick={showGarrus}>Garrus</button>
        <button onClick={showAshley}>Ashley</button>
        <button onClick={showLiara}>Liara</button>
        <CharacterBtn name="Miranda" showCharacter={showMiranda} firstGame="ME 2" prefferedWeapon="pistol"></CharacterBtn>
    </>)

}