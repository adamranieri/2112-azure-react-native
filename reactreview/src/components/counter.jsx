
let num =100

export default function Counter(){

    function increaseAndPrint(){
        num++;
        console.log(num)
    }

    return(<>
        <h5> The value of num is {num}</h5>
        <button onClick={increaseAndPrint}>Add</button>
    </>)

}