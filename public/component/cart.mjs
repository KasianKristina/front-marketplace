import {btnBuy} from "./basket.mjs"
import { likeproduct } from "./like.mjs";
/**
 * Формирование карточки с продуктом
 */
function generateCartProduct (img, id, title, price, buy, like) {
    let buy_btn = 'Купить';
    if (buy === 'Yes') { 
        buy_btn = 'Удалить';
    }

    return  `
    <div class="product-item" id="product-${id}" data-id="${id}">
        <img src="http://89.108.81.17:8082/product/${id}/photo/${img}" width="200" height="200" alt="product">
        <p class="product-title-${id}">${title}</p>
        <p class="product-price-${id}" id="price-${id}">${normalPrice(price)} ₽</p>
        <div class="buttons">
            <button class="buy" data-action="add-in-basket"  id="${id}-buy">${buy_btn}</button>
            <button class="like" data-action="add-like" id="${id}-like" value="${like}"><img src="picture/heart.png" id="${id}-like" value="${like}" data-action="add-like" width="15" height="15" alt=""></button>
        </div>
    </div>
    `;
    
}

/**
 * Добавление нового продукта
 */
export function add_product(sel,img,id,name,price,love, buy){
    const classin =  document.querySelector(`.${sel}`);
    classin.insertAdjacentHTML('beforeend',generateCartProduct(img,id,name, price, buy, love))
    color(id,love);
     let buyb = document.getElementById(`${id}-buy`);
     buyb.addEventListener('click', btnBuy,true);
     let likeb = document.getElementById(`${id}-like`);
     likeb.addEventListener('click', likeproduct);
}


/**
 * Корректировка внешнего вида цены
 */
export const normalPrice = (str) => {
    return str.toLocaleString('ru-RU', { currency: 'RUB' });
}

/**
 * изменение цвета у кнопки like
 */
export function color(id, like){
    let idLike = `${id}-like`
    var seltheme = document.getElementById(idLike);
    if (like === 'Yes') {seltheme.style.backgroundColor = '#DC143C';}
    if (like === 'No') {seltheme.style.backgroundColor = '#ffffff';}
}    
 