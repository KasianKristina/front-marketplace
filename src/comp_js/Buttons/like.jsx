import heart from '../../pict/heart.png';
import {useState} from 'react'
import '../../index.css';
/**
 * Создает кнопку "love"
 * @param {string} love - индикатор продукта в избранном
 * @param {number} id - id товара
 */
const ButtonLike = ({love, likeProduct, id}) => {
    const [likeBtn,setLikeBtn] = useState(love === 'No' ? 'No' : 'Yes');
    return ( 
        <button className={likeBtn === 'No' ? 'unlike' : 'like'}  onClick={()=>{likeProduct(setLikeBtn, likeBtn, id);}} data-action="add-like" id={`${id}-like`} value={`${love}`}>
        <img src={heart}  id={`${id}-like`} value={`${love}`} data-action="add-like" width="15" height="15" alt=""></img>
        </button>
     );
}
 
export default ButtonLike;