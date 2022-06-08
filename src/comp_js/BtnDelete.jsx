import  getCookie from './getcook';

/**
 * Делает запрос на бд (удаляет товар из корзины)
 * @param {number} id - id товара
 */
const deleteProduct = (id) => {
    let url = 'http://89.108.81.17:8082/customer/cart';   
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

export default deleteProduct;