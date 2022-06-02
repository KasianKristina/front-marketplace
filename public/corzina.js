import { SendForm, RegistrationForm} from "./component/enter.mjs";
import { update} from "./component/basket.mjs";


var enter = document.getElementById('enter_btn');
var regist = document.getElementById('regist_btn');
enter.addEventListener('click', function(event){
    SendForm(event);
})
regist.addEventListener('click', function(event){
    RegistrationForm(event);
})
update()


