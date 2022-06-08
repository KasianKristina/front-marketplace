/**
 * Создает кнопку "удалить"
 * @param {number} id - id товара
 */
const ButtonDelete = ({deleteProduct, filterProduct, id}) => {
    const buyBtn = 'Удалить';
    return ( 
        <button className="buy" onClick={()=>{deleteProduct(id); filterProduct(id);}} data-action="add-in-basket"  id={`${id}-buy`}>{buyBtn}</button>
     );
}
 
export default ButtonDelete;