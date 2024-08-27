import './products.css'
import{ps} from '../../service/productservice';
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
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
