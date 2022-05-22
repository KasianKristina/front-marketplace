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
});  
  
products('New');
products('hits');
products('mostpr');