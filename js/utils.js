function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
  const chars = 'abcdef0123456789'
  let randColor = ''
  for (let i = 0; i < 6; i++) {
    const randIdx = getRandomInt(0, chars.length)
    randColor += chars.charAt(randIdx)
  }
  return randColor
}
