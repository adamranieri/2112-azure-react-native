import { useEffect, useState } from "react"


export default function LifeCycle(){
    console.log("Top level of component")// will execute whenever the component is created and updated

    const [medkitCount,setMedKitCount] = useState({count:10});

    function useMedKit(){
        const clone = {...medkitCount}
        clone.count = clone.count - 1;
        setMedKitCount(clone)
    }

    useEffect(()=>{
        console.log("I run only once when the component is first mounted")
    },[])// hooking into the mounted part of the lifecycle

    useEffect(()=>{
        console.log("Anytime medkit count is updated")
    },[medkitCount]) // hooking into that updated part of the lifecyle

    return(<>
        <h3>Med Kit Count {medkitCount.count}</h3>
        <button onClick={useMedKit}>Remove Med Kit</button>
    </>)
}