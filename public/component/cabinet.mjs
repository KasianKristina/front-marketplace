//import { SendForm, RegistrationForm,products, getProductBasket, btnBuy} from "./component/enter.mjs";

function login_in_cabinet(e){
    //console.log(login);
    
    const classin =  document.querySelector(".line");
    classin.insertAdjacentHTML('beforeend',generateLogin(login))
    getProductBasket();
}



function generateLogin(login) {
    return `
    <span id="my-login">${login}</span>
    `;
}
