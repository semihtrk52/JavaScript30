const beforePage = document.querySelector('.before-page')
const afterPage = document.querySelector('.after-page')
const buttons = document.querySelectorAll('.buttons button')
const submitButton = document.querySelector('.submit')
const starInfo = document.getElementById('star-info')

function getAfterPage(buttonValue) {
  submitButton.addEventListener('click', () => {
    beforePage.style.display = 'none'
    afterPage.style.display = 'flex'
  })

  starInfo.innerHTML = `You selected ${buttonValue} out of 5`
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = 'white'
    button.style.color = 'black'
    const buttonValue = button.value
    getAfterPage(buttonValue)
  })
})
