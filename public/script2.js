import { SendForm, RegistrationForm} from "./component/enter.mjs";
import { btnBuy, update} from "./component/basket.mjs";
import {likeproduct} from "./component/like.mjs"


window.addEventListener('click', function(event){
    console.log("Click window");
    
    console.log(event.target.dataset.action);

    if (event.target.dataset.action === 'add-like') {
        likeproduct(event);
     }
    if (event.target.dataset.action === 'enter-enter'){
        SendForm(event);
        
    }
    if (event.target.dataset.action === 'registration-registration'){
        RegistrationForm(event);
    }
    if (event.target.dataset.action === 'add-in-basket'){
        btnBuy(event);
        update()       
    }
    
});    
update()


