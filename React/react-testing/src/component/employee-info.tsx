
export default function EmployeeInfo(props:{fname:string, department:string}){

    return(<>
        <h3>Name {props.fname}</h3>
        <h6>Department {props.department}</h6>
    </>)
}