import { useParams } from "react-router-dom"

export function Details(){
    let params=useParams();
    return(
        <div>
            <h3>Product Details: {params.pid}</h3>
        </div>
    )
}