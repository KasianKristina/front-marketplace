import  getCookie from './getcook';

/**
 * Делает запрос на бд (добавляет/удаляет товар из корзины)
 * @param {string} buyBtn - индикатор продукта в корзине
 * @param {number} id - id товара
 */
    const buyProduct = (setBuyBtn, buyBtn, id) => {
        let url = 'http://89.108.81.17:8082/customer/cart';
        if (buyBtn === 'Купить') {
            fetch(url, {
                method: 'POST',          
                body: JSON.stringify({'product_id': id, 'product_num':  1}), 
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + getCookie('token')
                }
            }).then(res => { 
                if (! res.ok){
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }       
          });
        }
        else {
            fetch(url, {
                method: 'DELETE',          
                body: JSON.stringify({'product_id': id}), 
                headers: {
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + getCookie('token')
                }
            }).then(res => { 
                if (! res.ok){
                    let error = new Error(res.statusText);
                    error.response = res;
                    throw error
                }       
          });
        }
        setBuyBtn(buyBtn === 'Купить' ? 'Удалить' : 'Купить')
    }

export default buyProduct;