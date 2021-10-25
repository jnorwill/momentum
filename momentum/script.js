const city = document.querySelector('.weather__city')

const setLocalStorage = () => {
  const nameText = document.querySelector('.name')
  const city = document.querySelector('.weather__city')
  localStorage.setItem('nameText', nameText.value)
  localStorage.setItem('city', city.value)
  console.log(city.value)
}
window.addEventListener('beforeunload', setLocalStorage)

const getLocalStorage = () => {
  const nameText = document.querySelector('.name')
  if (localStorage.getItem('nameText')) {
    nameText.value = localStorage.getItem('nameText')
  }
  const city = document.querySelector('.weather__city')
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
    console.log(city.value)
  }
  getWeather()
}
window.addEventListener('load', getLocalStorage)



const timeContainer = document.querySelector('.time')
const greetingContainer = document.querySelector('.greeting')
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
  } else { RandomNum++ }
  setBg()

}
const getSlidePrev = () => {
  if (RandomNum === '01') {
    RandomNum = '20'
  } else { RandomNum-- }
  setBg()
  console.log(RandomNum)
}

buttonSliderNext.addEventListener('click', getSlideNext)
buttonSliderPrev.addEventListener('click', getSlidePrev)



const weatherIcon = document.querySelector('.weather__icon')
const weatherTemperature = document.querySelector('.weather__temperature')
const weatherDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')


async function getWeather() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=687836a3b067d7a72f127c9e194380b6&units=metric`
  const res = await fetch(url)
  const data = await res.json()
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  weatherTemperature.innerHTML = `${Math.floor(data.main.temp)}°C `
  weatherDescription.innerHTML = `${data.weather[0].description}`
  weatherWind.innerHTML = `Wind speed: ${Math.floor(data.wind.speed)} m/s`
  weatherHumidity.innerHTML = `Humidity: ${Math.floor(data.main.humidity)} %`
  console.log(city.value)
}

city.addEventListener('change', getWeather)



