/**
 * Корректировка внешнего вида цены
 * @param {string} str - цена
 * @returns {string} откорректированная строка
 */
export default function normalPrice (str) {
    return str.toLocaleString('ru-RU', { currency: 'RUB' });
}

/**
 * изменение цвета у кнопки like
 * @param {number} id - id кнопки like
 * @param {string} like - индикатор кнопки like 
 */
 export function color(id, like){
    let idLike = `${id}-like`
    var seltheme = document.getElementById(idLike);
    if (like === 'Yes') {seltheme.style.backgroundColor = '#DC143C';}
    if (like === 'No') {seltheme.style.backgroundColor = '#ffffff';}
}
