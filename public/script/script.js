const btnMode = document.querySelector('.menu-btn-mode');
const btnMenu = document.querySelector('.menu-btn');
const allLinks = document.querySelectorAll('.navbar a');

btnMenu.addEventListener('click', closeMenu);
allLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
})

btnMode.onclick = () =>
{
	document.body.classList.toggle('while-mode');
}

function closeMenu(){
  document.querySelector('.navbar').classList.toggle('active');
}

const titleHeader = document.querySelector('.header-content-conteudo h1');
const textHeader = document.querySelector('.header-content-conteudo p');
efeitoDigitar(titleHeader);
efeitoDigitar(textHeader);
function efeitoDigitar(elemento)
{

	const elementoLetras = elemento.innerText.split('');
	elemento.innerText = '';

	elementoLetras.forEach((letra, id) => {
		setTimeout(() => { elemento.innerText += letra}, 100*id)
	})
}

const menuItems = document.querySelectorAll('a[href^="#"]');

menuItems.forEach(item => {item.addEventListener('click', scrollsuave)})

function scrollsuave()
{
	const to = gettopscroll(event.target);
	event.preventDefault();
	getwindowscroll(to);
}

function gettopscroll(element)
{
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function getwindowscroll(to)
{
	// window.scroll({
	// 	top: to,
	// 	behavior: "smooth",
	// })

	smoothScrollTo(0, to, 800)
}


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY - 100;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};