// Набор текста
const text =
	'A brutalism enthusiast & product designer based in Paris. Now, I am working at @sidebaystudio.'
const titleText = document.querySelector('.title__text')
let titleTextPosition = 0

const printText = () => {
	titleText.textContent += text[titleTextPosition]
	titleTextPosition++

	if (titleTextPosition === text.length) return

	setTimeout(printText, 25)
}

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => printText(), 2200)
    setTimeout(() => {
        document.querySelector('.menu').style.display='flex'
    }, 5250)
})
