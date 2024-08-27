import './products.css'
import{ps} from '../../service/productservice';
import { Link, Outlet } from 'react-router-dom';
import { createRef, useState } from 'react';
export function Product() {

    let [data,setData] = useState(ps.ProductService.search());
    let iref = createRef();
    let nref = createRef();
    let pref = createRef();

    function addProd(){
        setData(ps.ProductService.add(iref.current.value,nref.current.value,pref.current.value));
    }

    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr>
                            <td><Link to={`details/${d.id}`}>{d.id}</Link></td>
                            <td><>{d.name}</></td>
                            <td><>{d.price}</></td>
                        </tr>
                    ))}
                    <tr>
                        <td><input type="text" ref={iref}/></td>
                        <td><input type="text" ref={nref} /></td>
                        <td><input type="text" ref={pref}/></td>
                    </tr>
                    <tr >
                        <th colSpan='3'><button onClick={addProd}>Add</button></th>
                    </tr>
                </tbody>
            </table>
            <Outlet/>
        </div>
    );
}
