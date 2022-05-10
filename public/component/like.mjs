import { getCookie} from "./cookie.mjs";



export async function likeproduct(event){

  event.preventDefault();

  let id = event.target.getAttribute('id');
  let value = event.target.getAttribute('value');

  console.log(id);
  const idLove = id.substr(0, id.match(/-like/).index)
  var seltheme = document.getElementById(id);
  console.log(value);

  if (seltheme.style.backgroundColor === "rgb(255, 255, 255)") {
    value = 'Yes';
    seltheme.style.backgroundColor = '#DC143C'
    productLove(idLove);
  }
  else  {
    value = 'No';
    seltheme.style.backgroundColor = '#ffffff';
    deleteLove(idLove);
  }
}

export async function productLove(id){
  let url = 'https://cifra-store.herokuapp.com/customer/favourite';
  let response = await fetch(url, {
      method: 'POST',          
      body: JSON.stringify({'product_id': id}), 
      headers: {
          "Content-type": "application/json",
          'Authorization': 'Bearer ' + getCookie('token')
      }
  });
  let result = await response.json();

  console.log(result);  

  if (!response.ok){
    alert("Ошибка HTTP: " + response.status);
  } 

  // products('New');
  // products('hits');
  // products('mostpr');
}

export async function deleteLove(id){
  let url = 'https://cifra-store.herokuapp.com/customer/favourite';
  let response = await fetch(url, {
      method: 'DELETE',          
      body: JSON.stringify({'product_id': id}), 
      headers: {
          "Content-type": "application/json",
          'Authorization': 'Bearer ' + getCookie('token')
      }
  });
  let result = await response.json();

  console.log(result);  

  if (!response.ok){
    alert("Ошибка HTTP: " + response.status);
  } 

  // products('New');
  // products('hits');
  // products('mostpr');
}