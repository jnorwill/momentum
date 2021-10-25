const playList = [
  {
    title: 'Aqua Caelestis',
    src: './assets/sounds/Aqua Caelestis.mp3',
    duration: '00:39'
  },
  {
    title: 'River Flows In You',
    src: './assets/sounds/River Flows In You.mp3',
    duration: '01:37'
  },
  {
    title: 'Summer Wind',
    src: './assets/sounds/Summer Wind.mp3',
    duration: '01:50'
  },
  {
    title: 'Ennio Morricone',
    src: './assets/sounds/Ennio Morricone.mp3',
    duration: '01:37'
  },
]
const playListContainer = document.querySelector('.play-list')

const createList = () => {
  let x = 0
  playList.forEach(() => {
    const li = document.createElement('li');
    li.classList.add('play-list__item')
    li.classList.add(`play-list__item_${x}`)
    li.textContent = `${playList[x].title}`
    playListContainer.append(li)
    x++
  })
}
createList()


const buttonPlay = document.querySelector('.player-controls__play')
const buttonPrev = document.querySelector('.player-controls__prev')
const buttonNext = document.querySelector('.player-controls__next')
const playerTime = document.querySelector('.progress__time')
const audio = new Audio();
let i = 0

const currentProgress = document.querySelector('.progress__current')
const showCurrentTime = () => {
  const allTime = +audio.duration.toFixed(0)
  const currentTime = +audio.currentTime.toFixed(0)
  const currentMinutes = +(currentTime / 60).toFixed(0)
  const currentSeconds = String(currentTime % 60).padStart(2, "0")
  const allMinutes = +(allTime / 60).toFixed(0)
  const allSeconds = String(allTime % 60).padStart(2, "0")
  playerTime.innerHTML = `${currentMinutes}:${currentSeconds} / ${allMinutes}:${allSeconds}`
  currentProgress.style.width = `${+(currentTime * 100 / allTime).toFixed(0)}%`
  if (currentTime === allTime) {
    i++
    showActiveSong()
  }
}
const showActiveSong = () => {
  audio.src = playList[i].src
  audio.play()
  buttonPlay.classList.add('player-controls__pause')
  const prevActiveSong = document.querySelector('.item-active')
  if (prevActiveSong) {
    prevActiveSong.classList.remove('item-active')
  }
  const activeSong = document.querySelector(`.play-list__item_${i}`)
  activeSong.classList.add('item-active')
  setInterval(showCurrentTime, 1000)
}


const playAndPause = () => {
  audio.src = playList[i].src
  if (buttonPlay.classList.contains('player-controls__pause')) {
    audio.pause()
    buttonPlay.classList.remove('player-controls__pause')
  } else {
    showActiveSong()
  }

}
buttonPlay.addEventListener('click', playAndPause)
buttonPrev.addEventListener('click', () => {
  if (i === 0) {
    i = 3
  } else {
    i--
  }
  showActiveSong()
})
buttonNext.addEventListener('click', () => {
  if (i === 3) {
    i = 0
  } else {
    i++
  }
  showActiveSong()
})

const volumeAll = document.querySelector('.progress__volume-all')
const volumeCurrent = document.querySelector('.progress__volume-current')
const volumeButton = document.querySelector('.progress__volume-button')


let width
const showVolume = (event) => {
  const widthAll = volumeAll.offsetWidth
  width = +((+event.pageX.toFixed(0) - volumeCurrent.getBoundingClientRect().left.toFixed(0)) * 100 / widthAll).toFixed(0)
  if (width < 0) {
    volumeButton.classList.add('progress__volume-button_off')
    width = 0
  } else if (width > 100) {
    width = 100
  }
  if (width > 0 && volumeButton.classList.contains('progress__volume-button_off')) {
    volumeButton.classList.remove('progress__volume-button_off')
  }
  volumeCurrent.style.width = `${width}%`
  audio.volume = width / 100
}
volumeAll.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', showVolume)
  volumeAll.addEventListener('click', showVolume)
})

document.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', showVolume)
})

const onOffVolume = () => {
  if (!volumeButton.classList.contains('progress__volume-button_off')) {
    volumeButton.classList.add('progress__volume-button_off')
    audio.volume = 0
    volumeCurrent.style.width = `0`
  } else {
    volumeButton.classList.remove('progress__volume-button_off')
    audio.volume = width / 100
    volumeCurrent.style.width = `${width}%`
  }
}

volumeButton.addEventListener('click', onOffVolume)
