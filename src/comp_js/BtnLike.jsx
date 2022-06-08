import  getCookie from './getcook';

/**
 * Делает запрос на бд (добавляет/удаляет товар "Избранное")
 * @param {string} likeBtn - индикатор продукта в избранном
 * @param {number} id - id товара
 */
const likeProduct = (setLikeBtn, likeBtn, id) => {
    let url = 'http://89.108.81.17:8082/customer/favourite';
        if (likeBtn === 'No') {
            fetch(url, {
                method: 'POST',          
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
          });;
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
        setLikeBtn(likeBtn === 'No' ? 'Yes' : 'No')
}

export default likeProduct;