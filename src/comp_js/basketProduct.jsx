import {useEffect, useState} from 'react'
import ButtonDelete from './Buttons/delete';
import ButtonLike from './Buttons/like';
import  getCookie from './getcook';
import '../index.css';
import normalPrice from '../utils'
import deleteProduct from './BtnDelete'
import likeProduct from './BtnLike'
import TotalBasket from './TotalBasket';

export const ItemsInBasket = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    
    const [total, setTotal] = useState({
        price: items.reduce((prev, curr)=>{return prev + curr.price}, 0),
        count: items.length
    })

    /**
      * Счетчик итоговый суммы и количества товаров в корзине
    */
    useEffect(()=> {
        setTotal({
            price: items.reduce((prev, curr)=>{return prev + curr.price}, 0),
            count: items.length
        });
    }, [items])

    /**
      * Удаление товара из корзины
      * @param {number} product_id - id удаляемого товара
    */
    const filterProduct = (product_id) => {
        setItems((items) => {
            return items.filter((product)=>{return product_id !== product.product_id})
        })
    }

    

    useEffect(() => {
        let url = `http://89.108.81.17:8082/customer/cart?previous_id=0`;
        fetch(url, {
         headers: {
             'Authorization': 'Bearer ' + getCookie('token')
         }
     }).then(res => { 
        if (res.ok)
        {
          return res.json();
        }
        else{
          let error = new Error(res.statusText);
          error.response = res;
          throw error
        }
      }
      )
     .then(
       (result) => {
         setIsLoaded(true);
         setItems(result.products);
       },
       (error) => {
         setIsLoaded(true);
         setError(error);
       }
     )
 }, [])
    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
          
        return (
            <div className='page'>
            <div className="product">
            {items.map(item => (
                <div className="product-item" id={`product-${item.product_id}`} key={item.product_id} data-id={`${item.product_id}`}>
                <img src={`http://89.108.81.17:8082/product/${item.product_id}/photo/${item.url.match(/item_[0-9]*.jpg/)[0]}`} width="200" height="200" alt="product"></img>
                <p className="product-title">{item.name}</p>
                <p className="product-price" id="price">{normalPrice(item.price)} ₽</p>
                <div className="buttons">
                    <ButtonDelete buy={item.buy} deleteProduct={deleteProduct} filterProduct={filterProduct} id={item.product_id}/>
                    <ButtonLike love={item.love} likeProduct={likeProduct} id={item.product_id}/>
                </div>
            </div>
            ))}
            </div>
            <TotalBasket total={total}/>
           </div>
        );
    }  
}