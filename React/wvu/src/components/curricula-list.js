
export default function CurriculaList(){

    const curricula = ["Java Full Stack", "React Native", "Python Full Stack", "GCP Node Developer"];
    const curriculaItems = curricula.map(c => <li key={c} > {c}</li>);// React wants each element to be uniquely identifiable for PERFORMANCE reasons

    return(<>
        <h3>Curricula taught at WVU</h3>
        <ul>
            {curriculaItems}
        </ul>
    </>)
}