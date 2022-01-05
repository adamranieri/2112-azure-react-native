import {Link, useNavigate} from 'react-router-dom'

export default function NavBar(){

    const navigate = useNavigate()

    function redirect(){
        navigate("budget") 
    }

    return(<>
    <span>
        <Link to="budget">My Budget</Link>
        <Link to="tobuy">My Products</Link>
        <button onClick={redirect}>To Budget Page</button>
    </span>
    </>)
}