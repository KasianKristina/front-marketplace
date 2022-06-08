import '../../index.css';
import  setCookie from '../cookie';

export const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "pop_up active" : "pop_up"} onClick={()=>setActive(false)} id="pop_up_enter" >
        <div className="pop_up__container" onClick={e=> e.stopPropagation()}>
        <div className="pop_up__body" id="pop_up_body">
          <p className="pop_up_name">Вход</p>
          <form action="" id="form">
            <input className="pop_up__body__input" type="text" placeholder="Логин" id="login"></input>
            <input className="pop_up__body__input" type="text" placeholder="Пароль" id="password"></input>
            <button className="pop_up__body__enter enter" data-action="enter-enter" onClick={e=>  {SendForm(e)}} id="b"><a className="pop_up__body__enter__link" data-action="enter-enter">Войти</a></button>
          </form>
          <div className="pop_up__close" id="pop_up_close_enter" onClick={()=>setActive(false)}>&times;</div>
        </div>
      </div>
    </div>
    
    )
}

/**
 * Форма авторизации
 */
async function SendForm(e)
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
    else document.getElementById("pop_up_enter").remove('active');
    
    {setCookie('token',result.access_token, {'max-age': 1800 })}
    {setCookie('name',login,1800)}
    window.location.reload();
};
