
/**
 * Формирование карточки с продуктом
 */
function generateCartProduct (img, id, title, price, buy, love) {
    console.log("work");
    let buy_btn = 'Купить';
    if (buy === 'Yes') { buy_btn = 'Удалить';}

    return  `
    <div class="product-item" id="product-${id}" data-id="${id}">
        <img src="http://89.108.81.17:8082/product/${id}/photo/${img}" width="200" height="200" alt="product">
        <p class="product-title-${id}">${title}</p>
        <p class="product-price-${id}" id="price-${id}">${normalPrice(price)} ₽</p>
        <div class="buttons">
            <button class="buy" data-action="add-in-basket" id="${id}">${buy_btn}</button>
            <button class="like" data-action="add-like" id="${id}-like" value="${love}"><img src="picture/heart.png" id="${id}-like" value="${love}" data-action="add-like" width="15" height="15" alt=""></button>
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
    //colorlike(id,love);
    color(id,love);
}


/**
 * Корректировка внешнего вида цены
 */
export const normalPrice = (str) => {
    return (str + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
}

/**
 * изменение цвета у кнопки like
 */
function color(id, love){
    let idLove = `${id}-like`
    var seltheme = document.getElementById(idLove);
    if (love === 'Yes') {seltheme.style.backgroundColor = '#DC143C';}
    if (love === 'No') {seltheme.style.backgroundColor = '#ffffff';}
}        
    