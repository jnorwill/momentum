// const buttonPlay = document.querySelector('.player-controls__play')
// const buttonPrev = document.querySelector('.player-controls__prev')
// const buttonNext = document.querySelector('.player-controls__next')
const timeContainer = document.querySelector('.time')
const greetingContainer = document.querySelector('.greeting')
const name = document.querySelector('.name')
const dateContainer = document.querySelector('.date')




const getTimesOfDay = () => {
  let date = new Date()
  if (date.getHours() >= 0 && date.getHours() < 6) {
    return 'night'
  } else if (date.getHours() >= 6 && date.getHours() < 12) {
    return 'morning'
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    return 'afternoon'
  } else if (date.getHours() >= 18 && date.getHours() < 24) {
    return 'evening'
  }
}

const getDateMonth = () => {
  let date = new Date()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return months[date.getMonth()]
}

const getDateDay = () => {
  let date = new Date()
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return days[date.getDay()]
}

const showTime = () => {
  let date = new Date()
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  const time = `${hours}:${minutes}:${seconds}`
  timeContainer.innerHTML = time
}

const showDate = () => {
  let date = new Date()
  const dateText = `${getDateDay()}, ${getDateMonth()} ${date.getDate()}`
  dateContainer.innerHTML = dateText
}

const showGreeting = () => {
  const greetingText = `Good ${getTimesOfDay()}`
  greetingContainer.innerHTML = greetingText
}

showTime()
showDate()
showGreeting()
setInterval(showTime, 1000)
// setInterval(showDate, 1000)
setInterval(showGreeting, 1000 * 60 * 60 * 6)

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)


const body = document.querySelector('body')
const buttonSliderPrev = document.querySelector('.slider__prev')
const buttonSliderNext = document.querySelector('.slider__next')


let RandomNum = Math.floor(Math.random() * 20)


const setBg = () => {
  RandomNum = String(RandomNum).padStart(2, "0")
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/jnorwill/stage1-tasks/assets/images/${getTimesOfDay()}/${RandomNum}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url(${img.src})`
  }; 
}
setBg()
const getSlideNext = () => {
  if (RandomNum === '20') {
    RandomNum = '01'
    console.log(RandomNum)
  } else {RandomNum++}
  setBg()
  
}
const getSlidePrev = () => {
  if (RandomNum === '01') {
    RandomNum = '20'
  } else {RandomNum--}
  setBg()
  console.log(RandomNum)
}

buttonSliderNext.addEventListener('click', getSlideNext)
buttonSliderPrev.addEventListener('click', getSlidePrev)

