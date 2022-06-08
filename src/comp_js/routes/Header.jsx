import { useState } from 'react'
import menu from '../../pict/menu.svg';
import search from '../../pict/search.svg';
import { Link } from "react-router-dom"
import {Modal} from '../modalWindow/modal'
import {Registration} from '../modalWindow/registration'


export const Header = () => {
  const [modalActive, setModalActive] = useState(false)
  const [registrationActive, setRegistrationActive] = useState(false) 
    return (
        <header className="header">
        <div className="header__inner">
          <div className="header__logo"><Link to="/" className="header__logo__name" >MarketPlace</Link></div>
          <button type="text" className="header__catalog">Каталог<img src={menu} width="17" height="17" alt=""></img></button>
          <form className="search">
            <input type="search" className="header__search" placeholder="Искать на MarketPlace"/>
            <button type="submit" className="button">Поиск<img src={search} width="17" height="17" alt=""></img></button>
          </form>
          <nav className="nav">
          <a className="nav__link" href="#" id="open_pop_up_enter" onClick={()=>{setModalActive(true)} } >Войти</a> 
          
            <a className="nav__link" href="#" id="open_pop_up_reg" onClick={()=>{setRegistrationActive(true)}}>Регистрация</a>
            <a className="nav__link" >Избранное</a>
            <Link to="/basket" className="nav__link" >Корзина</Link>
          </nav>
          
        </div>
        <Modal active={modalActive} setActive={setModalActive}/>
        <Registration active={registrationActive} setActive={setRegistrationActive}/>
    </header>
    )
}