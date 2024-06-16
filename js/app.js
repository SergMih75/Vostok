// Набор текста
const text =
	'A brutalism enthusiast & product designer based in Paris. Now, I am working at @sidebaystudio.'
const titleText = document.querySelector('.title__text')
// Анимация прозрачности (выбор элементов)
const animationOpacity = document.querySelectorAll('.animation__opacity')
const animationPicOpacity = document.querySelector('.preview__img')
// Анимация логотипов клиентов
const clientLogoBlock = document.querySelector('.client__logo')

const clientLogoItem = document.querySelectorAll('.client__logo-item')

// Скорость появления заголовка
const titleSpeed = 1500
// Скорость вывода букв текста из (const text)
const textPrintSpeed = 25

let titleTextPosition = 0

const printText = () => {
	titleText.textContent += text[titleTextPosition]
	titleTextPosition++

	if (titleTextPosition === text.length) return

	setTimeout(printText, textPrintSpeed)
}

// Появление и удаление прозрачности текста при прокрутке
function opacityTextMove() {
	animationOpacity.forEach(animationOpacity => {
		if (
			animationOpacity.offsetTop +
				animationOpacity.clientHeight +
				5 -
				(document.documentElement.scrollTop +
					document.documentElement.clientHeight) <
			0
		) {
			animationOpacity.style.opacity = 1
			animationOpacity.style.transform = 'translateX(-' + 0 + ')'
		}

		if (
			animationOpacity.offsetTop -
				(document.documentElement.scrollTop +
					document.documentElement.clientHeight) >
			0
		) {
			animationOpacity.style.opacity = 0
			animationOpacity.style.transform = 'translateX(-' + 100 + '%)'
		}
	})
}

function opacityPicMove() {
	if ((animationPicOpacity.offsetTop + (animationPicOpacity.clientHeight / 3)) - (document.documentElement.scrollTop + document.documentElement.clientHeight) < 0) {
		animationPicOpacity.style.opacity = 1
	}
	if ((animationPicOpacity.offsetTop + (animationPicOpacity.clientHeight / 3)) - (document.documentElement.scrollTop + document.documentElement.clientHeight) > 0) {
		animationPicOpacity.style.opacity = 0.03
	}
}


function clientLogoMove() {	
	if (((clientLogoBlock.offsetTop + clientLogoBlock.clientHeight - 10) - (document.documentElement.scrollTop + document.documentElement.clientHeight)) < 0) {
		clientLogoItem.forEach(clientLogoItem=>{
			clientLogoItem.style.scale = 1
			clientLogoItem.style.opacity = 0.5
		})
	}
}



document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.title__title').style.animationDuration =
		titleSpeed + 'ms'
	document.querySelector('.title__title').style.webkitAnimationDuration =
		titleSpeed + 'ms'

	document.querySelector('.title__copyright').style.animationDelay =
		titleSpeed + text.length * textPrintSpeed + 25 + 'ms'
	document.querySelector('.title__copyright').style.webkitAnimationDelay =
		titleSpeed + text.length * textPrintSpeed + 25 + 'ms'

	setTimeout(() => printText(), titleSpeed)
	setTimeout(() => {
		document.querySelector('.menu').style.display = 'flex'
		document.querySelector('.preview').style.display = 'flex'
		document.querySelector('.running-line').style.display = 'block'
		document.querySelector('.client').style.display = 'block'
	}, titleSpeed + text.length * textPrintSpeed + 25)

	document.addEventListener('scroll', opacityTextMove)
	document.addEventListener('scroll', opacityPicMove)
	document.addEventListener('scroll', clientLogoMove)
})
