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
  }
  getWeather()
}
window.addEventListener('load', getLocalStorage)

let languageWeather = 'en'
let languageWind = 'Wind speed'
let languageHumidity = 'Humidity'
let languageMonths = [
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
let languageDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]


const languageTitle = document.querySelector('.settings-language-title')
const buttonEn = document.querySelector('.settings-language-en')
const buttonRu = document.querySelector('.settings-language-ru')

const settingButton = document.querySelector('.settings-main-button')
const settings = document.querySelector('.settings')
const settingsClose = document.querySelector('.settings__close')



settingButton.addEventListener('click', () => {
  settingButton.classList.add('settings-hidden')
  settings.classList.remove('settings-hidden')
})

settingsClose.addEventListener('click', () => {
  settingButton.classList.remove('settings-hidden')
  settings.classList.add('settings-hidden')
})

buttonEn.addEventListener('click', () => {
  const name = document.querySelector('.name')
  name.placeholder = "[Enter name]"
  changeQuote('text', 'author')
  settingButton.innerHTML = 'Settings'
  languageTitle.innerHTML = 'Language:'
  languageWeather = 'en'
  languageWind = 'Wind speed'
  languageHumidity = 'Humidity'
  languageMonths = [
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
  languageDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  getWeather()
  showGreeting()
  showDate()
  showGreeting()
})

buttonRu.addEventListener('click', () => {
  const name = document.querySelector('.name')
  name.placeholder = "[Введите имя]"
  changeQuote('textRu', 'authorRu')
  settingButton.innerHTML = 'Настройки'
  languageTitle.innerHTML = 'Язык:'
  languageWeather = 'ru'
  languageWind = 'Скорость ветра'
  languageHumidity = 'Влажность'
  languageMonths = [
    'Января',
    'Февраля',
    'Мара',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ]
  languageDays = [
    'Вскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ]
  getWeather()
  showGreeting()
  showDateRu()
  showGreetingRu()
})

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
  return languageMonths[date.getMonth()]
}

const getDateDay = () => {
  let date = new Date()
  return languageDays[date.getDay()]
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

const showDateRu = () => {
  let date = new Date()
  const dateText = `${getDateDay()}, ${date.getDate()} ${getDateMonth()}`
  dateContainer.innerHTML = dateText
}

const showGreeting = () => {
  const greetingText = `Good ${getTimesOfDay()}`
  greetingContainer.innerHTML = greetingText
}

const showGreetingRu = () => {
  let greetingText
  if (getTimesOfDay() === 'afternoon') {
    greetingText = 'Добрый день'
  } else if (getTimesOfDay() === 'evening') {
    greetingText = 'Добрый вечер'
  } else if (getTimesOfDay() === 'night') {
    greetingText = 'Доброй ночи'
  } else if (getTimesOfDay() === 'morning') {
    greetingText = 'Доброе утро'
  }
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
  } else { RandomNum++ }
  setBg()

}
const getSlidePrev = () => {
  if (RandomNum === '01') {
    RandomNum = '20'
  } else { RandomNum-- }
  setBg()
}

buttonSliderNext.addEventListener('click', getSlideNext)
buttonSliderPrev.addEventListener('click', getSlidePrev)



const weatherIcon = document.querySelector('.weather__icon')
const weatherTemperature = document.querySelector('.weather__temperature')
const weatherDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')


async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languageWeather}&appid=687836a3b067d7a72f127c9e194380b6&units=metric`
  const res = await fetch(url)
  const data = await res.json()
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  weatherTemperature.innerHTML = `${Math.floor(data.main.temp)}°C `
  weatherDescription.innerHTML = `${data.weather[0].description}`
  weatherWind.innerHTML = `${languageWind}: ${Math.floor(data.wind.speed)} m/s`
  weatherHumidity.innerHTML = `${languageHumidity}: ${Math.floor(data.main.humidity)} %`
}

city.addEventListener('change', getWeather)

const quoteContainer = document.querySelector('.footer__quote')
const authorContainer = document.querySelector('.footer__author')
const quoteButton = document.querySelector('.footer__change-quote')

async function changeQuote(text, author) {
  const number = Math.floor(Math.random() * 25)
  
  console.log(number)
  const url = './quote.json'
  const res = await fetch(url)
  const data = await res.json()
  quoteContainer.innerHTML = data[number][text]
  authorContainer.innerHTML = data[number][author]
}
changeQuote('text', 'author')
quoteButton.addEventListener('click',() =>{
  if (languageWeather === 'en') {
    changeQuote('text', 'author') 
  } else if (languageWeather === 'ru') {
    changeQuote('textRu', 'authorRu')
  }
})