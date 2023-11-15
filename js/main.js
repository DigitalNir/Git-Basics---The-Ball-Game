const elBall1 = document.querySelector('.ball1')
const elBall2 = document.querySelector('.ball2')
const elBall3 = document.querySelector('.ball3')

function onBallClick(elBall, maxDiameter) {
  // Get the computed styles of the element
  const computedStyle = window.getComputedStyle(elBall)

  // Parse the current width and height to integers
  let currWidth = parseInt(computedStyle.width)
  let currHeight = parseInt(computedStyle.height)

  // Check if the currentWidth and currentHeight are numbers, if not assign a default value
  if (isNaN(currWidth)) currWidth = 50 // Assuming default width to start with
  if (isNaN(currHeight)) currHeight = 50 // Assuming default height to start with

  const randomSize = getRandomInt(20, 61)

  currWidth =
    currWidth + randomSize >= maxDiameter ? 100 : currWidth + randomSize
  currHeight =
    currHeight + randomSize >= maxDiameter ? 100 : currHeight + randomSize

  const randColor = '#' + getRandomColor()

  elBall.style.width = currWidth + randomSize + 'px'
  elBall.style.height = currHeight + randomSize + 'px'

  elBall.innerText = elBall.style.width

  elBall.style.backgroundColor = randColor

  if (elBall.classList.contains('ball3')) {
    tempColor = elBall2.style.backgroundColor
    elBall2.style.backgroundColor = elBall1.style.backgroundColor
    elBall1.style.backgroundColor = tempColor

    tempSize = elBall2.style.width
    elBall2.style.width = elBall1.style.width
    elBall2.style.height = elBall1.style.width
    elBall1.style.width = tempSize
    elBall1.style.height = tempSize
  }
}
