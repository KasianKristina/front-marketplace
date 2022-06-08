import { ItemsInBasket } from "../basketProduct"

export const Basket = () => {
    return (
      <main className="main">
        <div className="cart">

            <div className="page" id="page-basket">
              <ItemsInBasket  key ={"Basket"}/> 
            </div>
                  
            <form id="coupon-form" className="coupone-field">
              <input className="coupone-field__input" type="text" placeholder="Введите промокод" />
              <button id="acivate-coupon-button" className="button" type="button">Активировать</button>
            </form>

            <button className="button_offer">Оформить заказ</button>
              
        </div>
      </main>
    )
}