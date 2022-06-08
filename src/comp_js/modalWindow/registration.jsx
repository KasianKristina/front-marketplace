import '../../index.css';
import  setCookie  from '../cookie';

export const Registration = ({active, setActive, children}) => {
    return (
      <div className={active ? "pop_up active" : "pop_up"} onClick={() => setActive(false)} id="pop_up_reg">
      <div className="pop_up__container" onClick={e => e.stopPropagation()}>
      <div className="pop_up__body" id="pop_up_body">
        <p className="pop_up_name">Регистрация</p>
        <form action="" id="form2">
          <input className="pop_up__body__input" type="text" placeholder="Логин" id="registration-login"></input>
          <input className="pop_up__body__input" type="text" placeholder="Пароль" id="registration-password"></input>
          <button id="regist_btn" className="pop_up__body__enter" data-action="registration-registration">
            <a className="pop_up__body__enter__link" data-action="registration-registration" onClick={e => RegistrationForm(e)}> Зарегистрироваться</a></button>
        </form>
          <div className="pop_up__close" id="pop_up_close_reg" onClick={() => setActive(false)}>&times;</div>
          </div>
        </div>
      </div>
    );
};


/**
 * Форма регистрации
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
                    document.getElementById("pop_up_reg").remove('active');
                    {setCookie('token',result.access_token, {'max-age': 1800 })}
                    { setCookie('name',login,1800)}
                    window.location.reload();
                 }
     }
     else {alert("Пароль должен содержать не менее 6 символов (и букв, и цифр)");
     document.getElementById("form2").reset(); };   

 };
 
 /**
  * Проверка пароля
  * @param {string} value - пароль
  */
 function isValid(value) {
     if (value.length >= 6 && /[0-9]/.test(value) && /[a-zа-яё]/i.test(value)) {
         return true;
     }
     else return false;
 }
 
