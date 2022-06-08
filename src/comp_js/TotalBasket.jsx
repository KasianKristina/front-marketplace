const TotalBasket = ({total}) => {
    const {count, price} = total;
    return ( 
        <div className="basket-total">

        <div className="basket-total__left">

          <div className="basket-total__value">
            <span>Количество товаров</span>
            <span className="js__items_count">: {count} товаров</span>
          </div>

          <div className="basket-total__value">
            <span>Общая сумма</span>
            <span className="js__all_items_price">: {price} ₽</span>
          </div>

          <div className="basket-total__value">
            <span>Скидка по промокоду</span>
            <span className="js__coupon_discount">: 0 ₽</span>
          </div>

          <div className="basket-total__value">
            <span>Скидка</span>
            <span className="js__total-discount">: 0 ₽</span>
          </div>

        </div>
        
        <div className="basket-total__right">
          <span>Итого без доставки</span>
          <span className="js__total_sum"> {price} ₽</span>
        </div>
      
      </div>
     );
}
 
export default TotalBasket;