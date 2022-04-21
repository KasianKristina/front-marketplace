const openPopUp = document.getElementById('open_pop_up_enter');
const closePopUp = document.getElementById('pop_up_close_enter');
const popUp = document.getElementById('pop_up_enter');

const openPopUp2 = document.getElementById('open_pop_up_reg');
const closePopUp2 = document.getElementById('pop_up_close_reg');
const popUp2 = document.getElementById('pop_up_reg');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active')
})

openPopUp2.addEventListener('click', function(e){
    e.preventDefault();
    popUp2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active')
})