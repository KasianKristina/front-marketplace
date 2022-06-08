import {useState} from 'react'

/**
 * Создает кнопку "купить/удалить"
 * @param {string} buy - индикатор продукта в корзине
 * @param {number} id - id товара
 */
const ButtonBuy = ({buy, buyProduct, id}) => {
    const [buyBtn,setBuyBtn] = useState(buy === 'No' ? 'Купить' : 'Удалить');
    return ( 
        <button className="buy" onClick={()=>{buyProduct(setBuyBtn, buyBtn, id);}} data-action="add-in-basket"  id={`${id}-buy`}>{buyBtn}</button>
     );
}
 
export default ButtonBuy;