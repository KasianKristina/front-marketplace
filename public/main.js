import { SendForm, RegistrationForm, products} from "./component/enter.mjs";


var enter = document.getElementById('enter_btn');
var regist = document.getElementById('regist_btn');
enter.addEventListener('click', function(event){
    SendForm(event);
})
regist.addEventListener('click', function(event){
    RegistrationForm(event);
})
 
products('New');
products('hits');
products('mostpr');