const observe = (classes) => {
  classes.forEach((cssClass) =>
    observer.observe(document.querySelector(`.${cssClass}`))
  )
}

const options = {
  rootMargin: '0px',
  threshold: 0.2,
}

const onIntersection = (entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  }
}

let observer = new IntersectionObserver(onIntersection, options)

const singleClassToObserve = [
  'why__illustration',
  'why__text',
  'feat__illu-invest',
  'feat__illu-statistics',
  'feat__illu-table',
  'starter-mining__banner',
  'category__cards',
  'others__social',
]

observe(singleClassToObserve)

const numbers = document.querySelectorAll('.numbers__group')
numbers.forEach((number) => observer.observe(number))

const cryptocurrencies = document.querySelectorAll('.cryptocurrencies__card')
cryptocurrencies.forEach((cryptocurrency) => observer.observe(cryptocurrency))

const features = document.querySelectorAll('.feat__text')
features.forEach((feat) => observer.observe(feat))
