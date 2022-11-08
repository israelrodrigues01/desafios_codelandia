const descContent = document.querySelector('.cotent-desc');
const inforContent = document.querySelector('.cotent-infor');
const buttonsContent = document.querySelector('.cotent-buttons');

function responsivo()
{
	var widthTela = document.body.offsetWidth;

	if (widthTela < 480) 
	{
		descContent.classList.add('mobile-desc');
		inforContent.classList.add('mobile-infor');
		buttonsContent.classList.add('mobile-buttons');
	}else{
		descContent.classList.remove('mobile-desc');
		inforContent.classList.remove('mobile-infor');
		buttonsContent.classList.remove('mobile-buttons');
	}
}
setInterval(responsivo, 0)