/**
 * Устанавливает куки с именем name и значением value, с настройкой path=/ по умолчанию
 * @param {string} name - имя токена
 * @param {string} value - значение токена
 * @param options - опции (я передаю время жизни токена)
 */
export default  function setCookie(name, value, options = {}) 
{

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}