import { SendForm, RegistrationForm, products} from "./component/enter.mjs";
import { likeproduct } from "./component/like.mjs";
import { btnBuy } from "./component/basket.mjs";

window.addEventListener('click', function(event){
    console.log("Click window");
    
    console.log(event.target.dataset.action);

    if (event.target.dataset.action === 'add-like') {
        console.log("like"); 
        likeproduct(event)
        
    }
    if (event.target.dataset.action === 'enter-enter'){
        SendForm(event);
    }
    if (event.target.dataset.action === 'registration-registration'){
        RegistrationForm(event);
    }
    if (event.target.dataset.action === 'add-in-basket'){
        btnBuy(event);
    }
    // if (event.target.dataset.action === 'my-cabinet'){
    //     login_in_cabinet()
    // }
    
});    
products('New');
products('hits');
products('mostpr');

//getProductBasket();


// const productsBtn = document.querySelectorAll('.buy');
// const fullPrice = document.querySelector('.product-price');
// let price = 0;

// productsBtn.forEach(el => {
//     el.addEventListener('click', (e) => {
//         let self = e.currentTarget;
//         let parent = self.closest('.product-item');
//         let id = parent.dataset.id;
//         //let img = parent.
//         let title = parent.querySelector('.product-title').textContent;
//         let priceString = parent.querySelector('.product-price').textContent;
//         console.log(priceString);
//     })
// })