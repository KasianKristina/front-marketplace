import { getCookie} from "./cookie.mjs";
import {add_product, normalPrice} from "./cart.mjs"
const fullPrice = document.querySelector('.js__all_items_price');
const endPrice = document.querySelector('.js__total_sum');
const elemBasket = document.getElementById('basket');
const count = document.querySelector('.js__items_count');
const count1 = document.getElementById('count');
let price = 0;

/**
 * Нажатие на кнопку купить/удалить
 */
export async function btnBuy(e){
    e.preventDefault();
    let id = e.target.getAttribute('id');
    let text = e.target.innerText;
    if (text === 'Купить') {
        productBasket(id);
        e.target.innerText = "Удалить"
    }
    else if (text === 'Удалить') {
        productDeleteBasket(id);
        e.target.innerText = "Купить"
    }
}


/**
 * Добавление продукта в корзину при нажатии кнопки "купить"
 * @param {number} id - id пользователя
 */
export async function productBasket(id){
    let url = 'http://89.108.81.17:8082/customer/cart';
    let response = await fetch(url, {
        method: 'POST',          
        body: JSON.stringify({'product_id': id, 'product_num':  1}), 
        headers: {
            "Content-type": "application/json",
            'Authorization': 'Bearer ' + getCookie('token')
        }
    });
    let result = await response.json();

    console.log(result);
}

/**
 * Удаление продукта из корзины при нажатии кнопки "удалить"
 * @param {number} id - id пользователя
 */
 export async function productDeleteBasket(id){
    let url = 'http://89.108.81.17:8082/customer/cart';

    console.log({'product_id': id});
 
    let response = await fetch(url, {
        method: 'DELETE',          
        body: JSON.stringify({'product_id': id}), 
        headers: {
            "Content-type": "application/json",
            'Authorization': 'Bearer ' + getCookie('token')
        }
    });
    let result = await response.json();
    console.log(result);

    //location.reload(); // перезагружаем страницу

}


/**
 * Обновление продуктов в корзине
 */
export function update() {

    var element = document.getElementById("basket");

    if (element){
        while (element.firstChild) {
        element.removeChild(element.firstChild);
        }
    }
    getProductBasket('http://89.108.81.17:8082/customer/cart?previous_id=0');
}



export async function getProductBasket(url){
    let response = await fetch(url, {
        method: 'GET',           
        headers: {
            'Authorization': 'Bearer ' + getCookie('token')
        }
    });
    let result = await response.json();

    
    if (response.ok){
        console.log('количество продуктов', result.products.length);
            for (let i = 0; i < result.products.length; i++) {
                add_product('basket',result.products[i].url.match(/item_[0-9]*.jpg/)[0],
                            result.products[i].product_id,result.products[i].name,result.products[i].price,
                            result.products[i].love,'Yes');

                let el = document.getElementById(result.products[i].product_id);
                el.innerText = "Удалить"; 
                
                plusFullPrice(result.products[i].price);
            }
    

            console.log(result);
        
            if (result.previous_id != 0) {getProductBasket(`http://89.108.81.17:8082/customer/cart?previous_id=${result.previous_id}`);}
            printFullPrice();
            printQuantity();
    }
}


const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
}

const printFullPrice = () => {
    fullPrice.textContent = `${normalPrice(price)} ₽`
    endPrice.textContent = `${normalPrice(price)} ₽`
}

const printQuantity = () => {
    let length = elemBasket.children.length;
    count.textContent = length;
    count1.textContent = length;
}
