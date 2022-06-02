import { add_product } from "./cart.mjs";
import { getCookie, setCookie} from "./cookie.mjs";





export async function products (tags) {
    let url = `http://89.108.81.17:8082/search/tag?tags=${tags}&previous_id=0`;
   
    let response = await fetch(url, {
        headers: {
          'Authorization': 'Bearer ' + getCookie('token')
        }
        });
    let result = await response.json(); 
  
    
    if (response.ok){
    for (let i = 0; i < result.products.length; i++) {
        add_product(tags,result.products[i].url.match(/item_[0-9]*.jpg/)[0],
                    result.products[i].id,result.products[i].name,result.products[i].price,
                     result.products[i].love, result.products[i].buy);
    }
    }

    if (response.status == 401){
        alert("Пользователь не авторизован. Попробуйте ещё раз");
    } else
    if (!response.ok){
        alert("Ошибка HTTP: " + response.status);
    } 
}


/**
 * Вход
 */
 export async function SendForm(e)
 {
     e.preventDefault();
     let login = document.getElementById('login').value;
     let password1 = document.getElementById('password').value;
     let formData = new FormData();
 
     formData.append('username', login);
     formData.append('password', password1);
 
     
     let response = await fetch('http://89.108.81.17:8082/login', {
         method: 'POST',          
         body: formData, 
     });
 
     document.getElementById("form").reset(); 
 
     let result = await response.json();
 
     if (response.status == 404){
         alert("Пользователя с таким именем не существует. Попробуйте ещё раз");
     } else
     if (response.status == 401){
         alert("Некорректный пароль. Попробуйте ещё раз");
     } else
     if (!response.ok){
         alert("Ошибка HTTP: " + response.status);
     }
     else popUp.classList.remove('active');
 
 
     setCookie('token',result.access_token, {'max-age': 1800 })
     setCookie('name',login,1800)
     location.reload();
 };
 
 


/**
 * Регистрация
 */
export async function RegistrationForm(e)
{
    e.preventDefault();
    let login = document.getElementById('registration-login').value;
    let password1 = document.getElementById('registration-password').value;

    if (isValid(password1)) {

        let formData = new FormData();
        

        formData.append('username', login);
        formData.append('password', password1);

        let response = await fetch('http://89.108.81.17:8082/registration', {
            method: 'POST',          
            body: formData, 
        });
    
        let result = await response.json();
    
        if (response.status == 404){
            alert("пользователь с таким именем уже существует. Попробуйте ещё раз");
            document.getElementById("form2").reset();
        }
        else 
            if (!response.ok){
                alert("Ошибка HTTP: " + response.status);
                document.getElementById("form2").reset();
            }
            else 
                if (response.ok){
                    popUp2.classList.remove('active');
                    setCookie('token',result.access_token, {'max-age': 1800 })
                    setCookie('name',login,1800)
                    location.reload();
                }
    }
    else {alert("Пароль должен содержать не менее 6 символов (и букв, и цифр)");
    document.getElementById("form2").reset(); };    
};

/**
 * Проверка пароля
 */
function isValid(value) {
    if (value.length >= 6 && /[0-9]/.test(value) && /[a-zа-яё]/i.test(value)) {
        return true;
    }
    else return false;
}


const openPopUp = document.getElementById('open_pop_up_enter');
const closePopUp = document.getElementById('pop_up_close_enter');
const popUp = document.getElementById('pop_up_enter');

const openPopUp2 = document.getElementById('open_pop_up_reg');
const closePopUp2 = document.getElementById('pop_up_close_reg');
const popUp2 = document.getElementById('pop_up_reg');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})

openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active')
})