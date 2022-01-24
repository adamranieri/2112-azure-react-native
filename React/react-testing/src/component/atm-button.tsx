

export default function AtmBtn(props:{ dispatch:Function}){

    function add100(){
        props.dispatch({type:"deposit", amount:100})

    }

    return(<>
        <button onClick={add100}> $100</button>  
    </>)
}