
// props allows us to pass in variables to the function
// we can use these variables however we want
// react component take in a single object, rather than multiple parameters
export default function EmployeeDetails(props){
    const {fname,lname,title,batches} = props;

    return(<>
        <h4>First Name {fname}</h4>
        <h4>Last Name {lname}</h4>
        <h4>Title {title}</h4>
        <h4>Batches {batches}</h4>
    </>)

}