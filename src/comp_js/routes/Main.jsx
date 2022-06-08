import main2_item from '../../pict/main2_item.jpg';
import {Items} from "../product";

export const   Main = () => {
    return (
      <main className="main">
      <div className="content">
        <div className="sale">
          <p className="sale-discription">Весенняя распродажа</p>
          <h1 className="sale-title">Скидки до 70%</h1>
          <a className="btn" href="#">Смотреть товары</a>
        </div>

        <div className="box">
          <img className="main-image" src={main2_item} width="700" height="320" alt="main"></img>
        </div>

      </div>

      <div className="delivery">
        <h2 className="notice-title"><span>Бесплатная доставка</span> от 2000 рублей</h2>
        <p className="notice-description">Сделайте заказ и получите подарок</p>
      </div>

      <div className="page">
        <h3 className="new">Новинки</h3>
        <div className="product New">
        <Items tags="New" key={"New1"}/>
        </div>
      </div>

      <div className="page">
        <h3 className="new">Хиты продаж</h3>
        <div className="product hits">
        <Items tags="hits" key={"hits1"}/>
        </div>
      </div>
      
      <div className="page">
        <h3 className="new">Самые просматриваемые</h3>
        <div className="product mostpr">
          <Items tags="mostpr" key={"mostpr1"}/>
        </div>
      </div>
     
    </main>
    )
}