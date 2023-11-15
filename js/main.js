function onBallClick(elBall) {
  // Get the computed styles of the element
  const computedStyle = window.getComputedStyle(elBall)

  // Parse the current width and height to integers
  let currWidth = parseInt(computedStyle.width)
  let currHeight = parseInt(computedStyle.height)

  // Check if the currentWidth and currentHeight are numbers, if not assign a default value
  if (isNaN(currWidth)) currWidth = 50 // Assuming default width to start with
  if (isNaN(currHeight)) currHeight = 50 // Assuming default height to start with

  currWidth = currWidth >= 400 ? 100 : currWidth
  currHeight = currHeight >= 400 ? 100 : currHeight

  const randomSize = getRandomInt(20, 61)

  elBall.style.width = currWidth + randomSize + 'px'
  elBall.style.height = currHeight + randomSize + 'px'

  elBall.innerText = elBall.style.width
}
