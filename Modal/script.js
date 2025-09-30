
const mainButton = document.querySelector('.main-button');
const modal = document.querySelector('.modal');
const closerButton = document.querySelector('.closer-button')

const openModal = ()=> {
	modal.classList.toggle('active');
}

const closeModal = ()=> {
	modal.classList.remove('active');
}

mainButton.addEventListener( 'click' , openModal );

closerButton.addEventListener( 'click' , closeModal);