import { useDispatch } from "react-redux";
import { actions, Product } from "../store";

export default function ProductListItem(props: Product){
    const {desc, isBought} = props;

    const dispatch = useDispatch()

    function markComplete(){
        // const action = {type:"Groceries/setProductComplete", payload: desc}
        const action = actions.setProductComplete(desc)
        dispatch(action)
    }


    return(<>
    <li>{desc} {isBought? 'ITEM PURCHASED': <button onClick={markComplete} >Mark as Purchased</button>}</li>
    </>)
}