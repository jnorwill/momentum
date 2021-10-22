// const buttonPlay = document.querySelector('.player-controls__play')
// const buttonPrev = document.querySelector('.player-controls__prev')
// const buttonNext = document.querySelector('.player-controls__next')
const timeContainer = document.querySelector('.time')
const greetingContainer = document.querySelector('.greeting')
const name = document.querySelector('.name')
const dateContainer = document.querySelector('.date')
// const buttonNext = document.querySelector('.player-controls__next')
// const buttonNext = document.querySelector('.player-controls__next')

const showTimesOfDay = () => {
  let date = new Date()
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  timeContainer.innerHTML = time
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
  if (date.getMonth() == 0) {
    return 'January'
  } else if (date.getMonth() == 1) {
    return 'February'
  } else if (date.getMonth() == 2) {
    return 'March'
  } else if (date.getMonth() == 3) {
    return 'April'
  } else if (date.getMonth() == 4) {
    return 'May'
  } else if (date.getMonth() == 5) {
    return 'June'
  } else if (date.getMonth() == 6) {
    return 'July'
  } else if (date.getMonth() == 7) {
    return 'August'
  } else if (date.getMonth() == 8) {
    return 'September'
  } else if (date.getMonth() == 9) {
    return 'October'
  } else if (date.getMonth() == 10) {
    return 'November'
  } else if (date.getMonth() == 11) {
    return 'December'
  }
}

const getDateDay = () => {
  let date = new Date()
  if (date.getDay() == 0) {
    return 'Sunday'
  } else if (date.getDay() == 1) {
    return 'Monday'
  } else if (date.getDay() == 2) {
    return 'Tuesday'
  } else if (date.getDay() == 3) {
    return 'Wednesday'
  } else if (date.getDay() == 4) {
    return 'Thursday'
  } else if (date.getDay() == 5) {
    return 'Friday'
  } else if (date.getDay() == 6) {
    return 'Saturday'
  }
}

const showDate = () => {
  let date = new Date()
  const dateText = `${getDateDay()}, ${getDateMonth()} ${date.getDate()}`
  dateContainer.innerHTML = dateText
}

const showGreeting = () => {
  const greetingText = `Good ${showTimesOfDay()}`
  greetingContainer.innerHTML = greetingText
}
showDate()
showTimesOfDay()
showGreeting()
setInterval(showDate, 1000)
setInterval(showTimesOfDay, 1000)
setInterval(showGreeting, 1000)

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

// const getRandomNum = () => {
//   let num = Math.floor(Math.random() * 20);
// }