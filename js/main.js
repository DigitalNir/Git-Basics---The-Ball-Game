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

  if (elBall.classList.contains('ball4')) {
    let randAmountToReduce = getRandomInt(20, 61)

    let newWidth1 = parseInt(elBall1.style.width) - randAmountToReduce
    let newWidth2 = parseInt(elBall2.style.width) - randAmountToReduce
    let newHeight1 = parseInt(elBall1.style.height) - randAmountToReduce
    let newHeight2 = parseInt(elBall2.style.height) - randAmountToReduce

    newWidth1 = newWidth1 < 100 ? 100 : newWidth1
    newWidth2 = newWidth2 < 100 ? 100 : newWidth2
    newHeight1 = newWidth1 < 100 ? 100 : newWidth1
    newHeight2 = newHeight2 < 100 ? 100 : newWidth2

    elBall2.style.width = newWidth1 + 'px'
    elBall2.style.height = newHeight1 + 'px'
    elBall1.style.width = newWidth2 + 'px'
    elBall1.style.height = newHeight2 + 'px'
  }

  if (elBall.classList.contains('ball5')) {
    document.body.style.backgroundColor = 'brown'
  }

  if (elBall.classList.contains('ball6')) {
    const rawHtml = `<h1>The Ball Game</h1>
    <div class="ball ball1" onclick="onBallClick(this, 300)">ball1</div>
    <div class="ball ball2" onclick="onBallClick(this, 200)">ball2</div>
    <div class="ball ball3" onclick="onBallClick(this, 200)">ball3</div>
    <div class="ball ball4" onclick="onBallClick(this, 400)">ball4</div>
    <div class="ball ball5" onclick="onBallClick(this, 400)">ball5</div>
    <div class="ball ball6" onclick="onBallClick(this, 400)">ball6</div>
    <script src="js/utils.js"></script>
    <script src="js/main.js"></script>`
    document.querySelector('body').innerHTML = rawHtml
    document.querySelector('body').style.backgroundColor = 'black'
  }
}
