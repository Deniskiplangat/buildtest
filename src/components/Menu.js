import react,{useState} from 'react';
import '../components/menu.css'
import data from '../data/data.json'
import {nanoid} from 'nanoid'

const Menu = ()=>{

    const [products, setProducts] = useState(data);
    const [addFormdata, setAddformdata] = useState({
        barcode:'',
        product:'',
        supplier:'',
        expirationdate:'',
        Daystoexpire:''
    });

    const handleFormEvents = (event)=>{
       event.preventDefault()

       const fieldName = event.target.getAttribute('name')
       const fieldValue = event.target.value;


       const newFormData = {...addFormdata};
       newFormData[fieldName] = fieldValue;

       setAddformdata(newFormData)
    }
    const handleAddFormSubmit = (event)=>{
        event.preventDefault()

        const newProduct = {
            id:nanoid(),
            barcode:addFormdata.barcode,
            product:addFormdata.product,
            supplier:addFormdata.supplier,
            expirationdate:addFormdata.expirationdate,
            Daystoexpire:addFormdata.Daystoexpire

        }
        const newProducts = [...products,newProduct]
        setProducts(newProducts)
    }
    
    return (
     <div className='apptable'>
        <table>
            <thead>
                <tr>
                    <th>Barcode</th>
                    <th>Product</th>
                    <th>supplier</th>
                    <th>Expiration date</th>
                    <th>Days to expire</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr>
                    <td>{product.barcode}</td>
                    <td>{product.product}</td>
                    <td>{product.supplier}</td>
                    <td>{product.expirationdate}</td>
                    <td>{product.Daystoexpire}</td>
                </tr>
                ))}
                
            </tbody>
            
        </table>
        <h2>Add a contact</h2>
        <form onSubmit={handleAddFormSubmit}>
            <input type='text' name='barcode' placeholder='insert product barcode' required="required" onChange={handleFormEvents}/>
            <input type='text' name='product' placeholder='item description' required="required" onChange={handleFormEvents}/>
            <input type='text' name='supplier' placeholder='product supplier' required="required" onChange={handleFormEvents}/>
            <input type='text' name='expirationdate' placeholder='expiration date' required="required" onChange={handleFormEvents}/>
            <input type='text' name='Daystoexpire' placeholder='days till expiry' required="required" onChange={handleFormEvents}/>
            <button type='submit'>add</button>
        </form>
     </div>
    );
}

export default Menu;