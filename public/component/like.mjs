import { getCookie} from "./cookie.mjs";
import {color} from "./cart.mjs"
let url = 'http://89.108.81.17:8082/customer/favourite';

/**
 * Нажатие на кнопку like
 */
 export async function likeproduct(event){

  event.preventDefault();

  let id = event.target.getAttribute('id');
  const button = document.getElementById(id);

  const idLove = id.substr(0, id.match(/-like/).index)

  if (button.value === 'No') {
    button.value = 'Yes';
    productLove(idLove);
  }
  else  {
    button.value = 'No';
    deleteLove(idLove);
  }
}

/**
 * Добавить продукт в корзину
 */
 export async function productLove(id){
  color(id, 'Yes');
  let response = await fetch(url, {
      method: 'POST',          
      body: JSON.stringify({'product_id': id}), 
      headers: {
          "Content-type": "application/json",
          'Authorization': 'Bearer ' + getCookie('token')
      }
  });
  if (!response.ok){
    alert("Ошибка HTTP: " + response.status);
  } 

}

/**
 * Удаление продукта из корзины
 */
 export async function deleteLove(id){
  color(id, 'No');
  let response = await fetch(url, {
      method: 'DELETE',          
      body: JSON.stringify({'product_id': id}), 
      headers: {
          "Content-type": "application/json",
          'Authorization': 'Bearer ' + getCookie('token')
      }
  });
  if (!response.ok){
    alert("Ошибка HTTP: " + response.status);
  } 

}