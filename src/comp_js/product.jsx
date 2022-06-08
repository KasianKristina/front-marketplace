import {useEffect, useState} from 'react'
import ButtonBuy from './Buttons/buy';
import ButtonLike from './Buttons/like';
import getCookie from './getcook';
import '../index.css';
import normalPrice from '../utils'
import buyProduct from './BtnByu'
import likeProduct from './BtnLike'

export  const Items = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let url = `http://89.108.81.17:8082/search/tag?tags=${props.tags}&previous_id=0`;
        fetch(url, {
         headers: {
             'Authorization': 'Bearer ' + getCookie('token')
         }
     }).then(res => { 
        if (res.ok)
        {
          return res.json()
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
            <div className="product">
            {items.map(item => (
                <div className="product-item" key={item.id} data-id={`${item.id}`}>
                <img src={`http://89.108.81.17:8082/product/${item.id}/photo/${item.url.match(/item_[0-9]*.jpg/)[0]}`} width="200" height="200" alt="product"></img>
                <p className="product-title">{item.name}</p>
                <p className="product-price" id="price">{normalPrice(item.price)} ₽</p>
                <div className="buttons">
                    <ButtonBuy buy={item.buy} buyProduct={buyProduct} id={item.id}/>
                    <ButtonLike love={item.love} likeProduct={likeProduct} id={item.id}/>
                </div>
            </div>
            ))}
           </div>
        );
    }  
}