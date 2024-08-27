import './products.css'
import{ps} from '../../service/productservice';
import { Link } from 'react-router-dom';
export function Product() {

    let data=ps.ProductService.search();

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
                            <td><Link to='/details'>{d.id}</Link></td>
                            <td><>{d.name}</></td>
                            <td><>{d.price}</></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
