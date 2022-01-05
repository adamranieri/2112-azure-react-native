import { useSelector } from "react-redux"
import { GroceryState, Product } from "../store"
import ProductListItem from "./product-listitem"

export default function ProductList(){

    const products: Product[] = useSelector((state: GroceryState) => state.products)
    const budget = useSelector((state:GroceryState)=> state.budget)


    const productItems = products.map(p => <ProductListItem key={p.desc} {...p}/>)

    return(<>
    <h4>Budget {budget}</h4>
        <ul>
            {productItems}
        </ul>
    </>)

}